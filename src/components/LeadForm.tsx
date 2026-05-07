import React from 'react';
import { useLeadForm } from '../hooks/useLeadForm';
import { CITIES, REQUIREMENT_TYPES, BUDGET_OPTIONS } from '../constants';

export const LeadForm: React.FC = () => {
  const {
    form,
    errors,
    loading,
    discountAmount,
    finalPrice,
    couponError,
    handleChange,
    handleApplyCoupon,
    handleSubmit,
  } = useLeadForm();

  return (
    <div className="min-h-screen bg-[#fcfaff] flex items-center justify-center px-4 py-12 font-sans">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#e0d7ff]/40 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] -right-[5%] w-[35%] h-[35%] bg-[#fff0e5]/50 rounded-full blur-[100px]" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-2xl rounded-[40px] border border-white/60 bg-white/70 backdrop-blur-3xl p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] ring-1 ring-black/5"
      >
        <div className="relative z-10">

          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-[#1e1b4b] font-display">
              Submit Requirement
            </h1>
            <p className="text-[#6366f1]/70 mt-3 text-sm font-medium tracking-wide uppercase">
              Get your custom quote today
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

            {/* Name */}
            <div className="space-y-2">
              <label className="block text-[13px] font-semibold text-[#4338ca]/80 ml-1">
                FULL NAME
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full py-3.5 px-5 rounded-2xl border ${errors.name ? 'border-red-300 ring-4 ring-red-50' : 'border-[#e0e7ff] focus:border-[#818cf8] focus:ring-4 focus:ring-[#eef2ff]'} bg-white/70 text-[#1e1b4b] placeholder:text-[#94a3b8] outline-none transition-all duration-300 caret-indigo-600 focus:bg-white`}
              />
              {errors.name && <p className="text-[11px] text-red-500 font-medium ml-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="block text-[13px] font-semibold text-[#4338ca]/80 ml-1">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className={`w-full py-3.5 px-5 rounded-2xl border ${errors.phone ? 'border-red-300 ring-4 ring-red-50' : 'border-[#e0e7ff] focus:border-[#818cf8] focus:ring-4 focus:ring-[#eef2ff]'} bg-white/70 text-[#1e1b4b] placeholder:text-[#94a3b8] outline-none transition-all duration-300 caret-indigo-600 focus:bg-white`}
              />
              {errors.phone && <p className="text-[11px] text-red-500 font-medium ml-1">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-[13px] font-semibold text-[#4338ca]/80 ml-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full py-3.5 px-5 rounded-2xl border ${errors.email ? 'border-red-300 ring-4 ring-red-50' : 'border-[#e0e7ff] focus:border-[#818cf8] focus:ring-4 focus:ring-[#eef2ff]'} bg-white/70 text-[#1e1b4b] placeholder:text-[#94a3b8] outline-none transition-all duration-300 caret-indigo-600 focus:bg-white`}
              />
              {errors.email && <p className="text-[11px] text-red-500 font-medium ml-1">{errors.email}</p>}
            </div>

            {/* City */}
            <div className="space-y-2">
              <label className="block text-[13px] font-semibold text-[#4338ca]/80 ml-1">
                CITY
              </label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full py-3.5 px-5 rounded-2xl border border-[#e0e7ff] bg-white/70 text-[#1e1b4b] outline-none transition-all duration-300 focus:border-[#818cf8] focus:ring-4 focus:ring-[#eef2ff] appearance-none focus:bg-white"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236366f1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1rem' }}
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
              <label className="block text-[13px] font-semibold text-[#4338ca]/80 ml-1">
                REQUIREMENT TYPE
              </label>
              <select
                name="requirementType"
                value={form.requirementType}
                onChange={handleChange}
                className="w-full py-3.5 px-5 rounded-2xl border border-[#e0e7ff] bg-white/70 text-[#1e1b4b] outline-none transition-all duration-300 focus:border-[#818cf8] focus:ring-4 focus:ring-[#eef2ff] appearance-none focus:bg-white"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236366f1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1rem' }}
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
              <label className="block text-[13px] font-semibold text-[#4338ca]/80 ml-1">
                BUDGET RANGE
              </label>
              <select
                name="budgetRange"
                value={form.budgetRange}
                onChange={handleChange}
                className="w-full py-3.5 px-5 rounded-2xl border border-[#e0e7ff] bg-white/70 text-[#1e1b4b] outline-none transition-all duration-300 focus:border-[#818cf8] focus:ring-4 focus:ring-[#eef2ff] appearance-none focus:bg-white"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236366f1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1rem' }}
              >
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mt-6 space-y-2">
            <label className="block text-[13px] font-semibold text-[#4338ca]/80 ml-1">
              ADDITIONAL MESSAGE (OPTIONAL)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your requirement..."
              className="w-full px-5 py-4 rounded-2xl border border-[#e0e7ff] bg-white/70 text-[#1e1b4b] placeholder:text-[#94a3b8] outline-none transition-all duration-300 resize-none focus:border-[#818cf8] focus:ring-4 focus:ring-[#eef2ff] caret-indigo-600 focus:bg-white"
            />
          </div>

          {/* Coupon Section */}
          <div className="mt-8 p-6 rounded-[32px] bg-[#f8f7ff] border border-[#eef2ff]">
            <label className="block text-[13px] font-semibold text-[#4338ca]/80 ml-1 mb-3">
              PROMO CODE
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                name="couponCode"
                value={form.couponCode}
                onChange={handleChange}
                placeholder="SAVE10"
                className="flex-1 py-3.5 px-5 rounded-xl border border-[#e0e7ff] bg-white/70 text-[#1e1b4b] placeholder:text-[#94a3b8] outline-none transition-all duration-300 focus:border-[#818cf8] caret-indigo-600 focus:bg-white"
              />
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="px-8 rounded-xl bg-[#4f46e5] text-white text-sm font-bold hover:bg-[#4338ca] active:scale-95 transition-all duration-200 shadow-lg shadow-[#4f46e5]/20"
              >
                Apply
              </button>
            </div>

            {couponError && (
              <p className="text-[11px] text-red-500 font-bold mt-3 ml-1 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500" />
                {couponError}
              </p>
            )}

            {discountAmount > 0 && (
              <div className="mt-6 space-y-3 pt-4 border-t border-[#e0e7ff]">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6366f1] font-medium">DISCOUNT APPLIED</span>
                  <span className="font-bold text-emerald-600">- ₹{discountAmount.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#1e1b4b]">FINAL ESTIMATE</span>
                  <span className="text-3xl font-black text-[#1e1b4b] tracking-tight">₹{finalPrice.toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-16 rounded-[24px] bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#4f46e5] bg-[length:200%_auto] hover:bg-right text-white text-lg font-bold mt-10 transition-all duration-500 shadow-xl shadow-[#4f46e5]/25 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Submit My Request'
            )}
          </button>

          {errors.submit && (
            <p className="text-red-500 text-xs font-bold mt-4 text-center">
              {errors.submit}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};