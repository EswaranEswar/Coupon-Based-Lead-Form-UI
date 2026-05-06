import React from 'react';
import { useLeadForm } from '../hooks/useLeadForm';

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
    <div className="min-h-screen bg-gradient-to-br from-[#eaf2ff] via-[#f4f8ff] to-[#eef3ff] flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="relative overflow-hidden w-full max-w-2xl rounded-[32px] border border-[#d9e6ff] bg-[#f4f8ff]/90 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(148,163,184,0.18)]"
      >
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-[#2d3b55]">
              Submit Your Requirement
            </h1>

            <p className="text-[#6c7a96] mt-3 text-sm leading-relaxed">
              Fill your details and apply coupon if available.
            </p> -
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#44506b]">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full h-13 px-4 rounded-2xl border border-[#d6e2f5] bg-white/70 text-[#334155] placeholder:text-[#94a3b8] outline-none transition focus:border-[#7aa2ff] focus:ring-4 focus:ring-[#dbeafe]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#44506b]">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-full h-13 px-4 rounded-2xl border border-[#d6e2f5] bg-white/70 text-[#334155] placeholder:text-[#94a3b8] outline-none transition focus:border-[#7aa2ff] focus:ring-4 focus:ring-[#dbeafe]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#44506b]">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full h-13 px-4 rounded-2xl border border-[#d6e2f5] bg-white/70 text-[#334155] placeholder:text-[#94a3b8] outline-none transition focus:border-[#7aa2ff] focus:ring-4 focus:ring-[#dbeafe]"
              />
            </div>

            {/* City */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#44506b]">
                City
              </label>

              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full h-13 px-4 rounded-2xl border border-[#d6e2f5] bg-white/70 text-[#334155] outline-none transition focus:border-[#7aa2ff] focus:ring-4 focus:ring-[#dbeafe]"
              >
                <option>Chennai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
            </div>

            {/* Requirement */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#44506b]">
                Requirement Type
              </label>

              <select
                name="requirementType"
                value={form.requirementType}
                onChange={handleChange}
                className="w-full h-13 px-4 rounded-2xl border border-[#d6e2f5] bg-white/70 text-[#334155] outline-none transition focus:border-[#7aa2ff] focus:ring-4 focus:ring-[#dbeafe]"
              >
                <option value="Service">Service</option>
                <option value="Product">Product</option>
                <option value="Consultation">Consultation</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#44506b]">
                Budget Range
              </label>

              <select
                name="budgetRange"
                value={form.budgetRange}
                onChange={handleChange}
                className="w-full h-13 px-4 rounded-2xl border border-[#d6e2f5] bg-white/70 text-[#334155] outline-none transition focus:border-[#7aa2ff] focus:ring-4 focus:ring-[#dbeafe]"
              >
                <option value="500">₹ 500</option>
                <option value="1000">₹ 1,000</option>
                <option value="2000">₹ 2,000</option>
                <option value="5000">₹ 5,000</option>
                <option value="10000">₹ 10,000</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block mb-2 text-sm font-semibold text-[#44506b]">
              Message
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your requirement..."
              className="w-full px-4 py-4 rounded-2xl border border-[#d6e2f5] bg-white/70 text-[#334155] placeholder:text-[#94a3b8] outline-none transition resize-none focus:border-[#7aa2ff] focus:ring-4 focus:ring-[#dbeafe]"
            />
          </div>

          {/* Coupon */}
          <div className="mt-6">
            <label className="block mb-2 text-sm font-semibold text-[#44506b]">
              Coupon Code
            </label>

            <div className="flex gap-3">
              <input
                type="text"
                name="couponCode"
                value={form.couponCode}
                onChange={handleChange}
                placeholder="Enter coupon"
                className="flex-1 h-13 px-4 rounded-2xl border border-[#d6e2f5] bg-white/70 text-[#334155] placeholder:text-[#94a3b8] outline-none transition focus:border-[#7aa2ff] focus:ring-4 focus:ring-[#dbeafe]"
              />

              <button
                type="button"
                onClick={handleApplyCoupon}
                className="px-6 rounded-2xl bg-gradient-to-r from-[#6ea8fe] to-[#5b8def] text-white text-sm font-semibold hover:opacity-95 transition shadow-md"
              >
                Apply
              </button>
            </div>

            {couponError && (
              <p className="text-sm text-red-500 mt-3">
                {couponError}
              </p>
            )}

            {discountAmount > 0 && (
              <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#64748b]">
                    Discount
                  </span>

                  <span className="font-semibold text-emerald-700">
                    - ₹{discountAmount.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="font-semibold text-[#334155]">
                    Final Price
                  </span>

                  <span className="text-3xl font-bold text-[#2d3b55]">
                    ₹{finalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#5b6b8c] to-[#4c5d7a] text-white font-semibold mt-8 hover:opacity-95 transition shadow-lg"
          >
            {loading ? 'Submitting...' : 'Submit Lead'}
          </button>

          {errors.submit && (
            <p className="text-red-500 text-sm mt-4">
              {errors.submit}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};