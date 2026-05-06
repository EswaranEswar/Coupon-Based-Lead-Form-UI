import { useState } from 'react';
import { createLead } from '../services/lead.api';
import { useCoupon } from '../hooks/useCoupon';

export type RequirementType =
  | 'Service'
  | 'Product'
  | 'Consultation';

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

  const {
    discountAmount,
    finalPrice,
    error: couponError,
    applyCoupon,
    clearCoupon,
  } = useCoupon(
    form.requirementType,
    form.budgetRange,
  );

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
  };

  const handleSubmit = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createLead(form);

      alert('Lead submitted successfully');

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
    discountAmount,
    finalPrice,
    couponError,
    handleChange,
    handleApplyCoupon,
    handleSubmit,
  };
};