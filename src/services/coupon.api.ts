export const validateCouponApi = async (payload: {
  couponCode: string;
  requirementType: string;
  budgetRange: number;
  email: string;
}) => {
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';
  const response = await fetch(`${baseUrl}/coupons/validate`, {
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