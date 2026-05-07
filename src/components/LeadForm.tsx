import React from 'react';
import { useLeadForm } from '../hooks/useLeadForm';
import { CITIES, REQUIREMENT_TYPES, BUDGET_OPTIONS } from '../constants';

export const LeadForm: React.FC = () => {
  const {
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
    resetStatus,
  } = useLeadForm();

  if (isSubmitted) {
    return (
      <div className="min-h-[500px] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted</h2>
          <p className="text-slate-600 mb-8">
            Thank you. Our team will contact you shortly with a personalized quote.
          </p>
          <button
            onClick={resetStatus}
            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 bg-slate-50">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm"
      >
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">
            Submit Requirement
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            Please provide your details below to receive an estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full py-3 px-4 rounded-xl border ${errors.name ? 'border-red-300' : 'border-slate-200 focus:border-indigo-500'} bg-white text-slate-900 outline-none transition-colors`}
            />
            {errors.name && <p className="text-[11px] text-red-500 font-medium ml-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className={`w-full py-3 px-4 rounded-xl border ${errors.phone ? 'border-red-300' : 'border-slate-200 focus:border-indigo-500'} bg-white text-slate-900 outline-none transition-colors`}
            />
            {errors.phone && <p className="text-[11px] text-red-500 font-medium ml-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full py-3 px-4 rounded-xl border ${errors.email ? 'border-red-300' : 'border-slate-200 focus:border-indigo-500'} bg-white text-slate-900 outline-none transition-colors`}
            />
            {errors.email && <p className="text-[11px] text-red-500 font-medium ml-1">{errors.email}</p>}
          </div>

          {/* City */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
              City
            </label>
            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:border-indigo-500 appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
            >
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Requirement */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
              Requirement Type
            </label>
            <select
              name="requirementType"
              value={form.requirementType}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:border-indigo-500 appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
            >
              {REQUIREMENT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
              Budget Range
            </label>
            <select
              name="budgetRange"
              value={form.budgetRange}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:border-indigo-500 appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
            Additional Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Optional message..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:border-indigo-500 resize-none transition-colors"
          />
        </div>

        {/* Coupon */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider ml-1 mb-3">
            Promo Code
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              name="couponCode"
              value={form.couponCode}
              onChange={handleChange}
              placeholder="SAVE10"
              className="flex-1 py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:border-indigo-500 transition-colors uppercase"
            />
            <button
              type="button"
              onClick={handleApplyCoupon}
              className="px-6 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-black transition-colors"
            >
              Apply
            </button>
          </div>

          {couponError && (
            <p className="text-[11px] text-red-500 font-bold mt-3 ml-1">
              {couponError}
            </p>
          )}

          {discountAmount > 0 && (
            <div className="mt-6 space-y-2 pt-4 border-t border-slate-200">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Discount</span>
                <span className="font-bold text-emerald-600">- ₹{discountAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="font-bold text-slate-900">Total Estimate</span>
                <span className="text-2xl font-bold text-slate-900">₹{finalPrice.toLocaleString()}</span>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-14 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-base font-bold mt-8 transition-colors flex items-center justify-center disabled:opacity-70"
        >
          {loading ? 'Processing...' : 'Submit Request'}
        </button>

        {errors.submit && (
          <p className="text-red-500 text-xs font-bold mt-4 text-center">
            {errors.submit}
          </p>
        )}
      </form>
    </div>
  );
};