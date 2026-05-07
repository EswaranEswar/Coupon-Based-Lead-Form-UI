import { useState } from 'react';
import { createLead } from '../services/lead.api';
import { useCoupon } from '../hooks/useCoupon';
import { leadFormSchema } from '../types/form.schema';
import { type RequirementType } from '../constants';

export const useLeadForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Chennai',
    requirementType: 'Service' as RequirementType,
    budgetRange: '1000',
    message: '',
    couponCode: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    discountAmount,
    finalPrice,
    error: couponError,
    applyCoupon,
    clearCoupon,
  } = useCoupon(
    form.requirementType,
    form.budgetRange,
    form.email,
  );

  const validateField = (name: string, value: any) => {
    const fieldSchema = leadFormSchema.shape[name as keyof typeof leadFormSchema.shape];
    if (!fieldSchema) return '';

    const result = fieldSchema.safeParse(value);
    return result.success ? '' : result.error.issues[0].message;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleApplyCoupon = async () => {
    await applyCoupon(form.couponCode);
  };

  const resetForm = () => {
    setForm({
      name: '',
      phone: '',
      email: '',
      city: 'Chennai',
      requirementType: 'Service',
      budgetRange: '1000',
      message: '',
      couponCode: '',
    });

    clearCoupon();
    setErrors({});
  };

  const handleSubmit = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    const result = leadFormSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({});

      await createLead({
        ...form,
        budgetRange: Number(form.budgetRange),
      });

      setIsSubmitted(true);
      resetForm();
    } catch (err: any) {
      setErrors({
        submit: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    errors,
    loading,
    isSubmitted,
    discountAmount,
    finalPrice,
    couponError,
    handleChange,
    handleApplyCoupon,
    handleSubmit,
    resetStatus: () => setIsSubmitted(false),
  };
};