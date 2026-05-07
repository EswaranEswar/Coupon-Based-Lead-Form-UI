export const validateCouponApi = async (payload: {
  couponCode: string;
  requirementType: string;
  budgetRange: number;
  email: string;
}) => {
  const response = await fetch('/api/coupons/validate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Invalid coupon');
  }

  return data;
};