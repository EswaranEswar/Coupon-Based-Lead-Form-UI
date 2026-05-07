import React, { useEffect, useState } from 'react';
import { getLeads } from '../services/lead.api';

export const Dashboard: React.FC = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await getLeads();
        setLeads(response.data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8 bg-slate-50 min-h-screen">
      <div className="flex items-center justify-between border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Submissions</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and track your lead generations</p>
        </div>
        <div className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 text-xs font-bold shadow-sm">
          {leads.length} Leads
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(leads) && leads.map((lead) => (
          <div
            key={lead._id || Math.random().toString()}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase tracking-wider">
                {lead.requirementType || 'N/A'}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : ''}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">{lead.name || 'Anonymous'}</h3>
                <p className="text-sm text-slate-500">{lead.city || 'Unknown City'}</p>
              </div>

              <div className="space-y-1.5 py-3 border-y border-slate-50">
                <p className="text-xs text-slate-600 truncate flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-400" />
                  {lead.email || 'No Email'}
                </p>
                <p className="text-xs text-slate-600 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-400" />
                  {lead.phone || 'No Phone'}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Final Price</p>
                  <p className="text-lg font-bold text-slate-900">₹{lead.finalPrice?.toLocaleString() ?? '0'}</p>
                </div>
                {lead.couponCode && (
                  <div className="text-right">
                    <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Saved</p>
                    <p className="text-sm font-bold text-emerald-600">₹{lead.discountAmount?.toLocaleString() ?? '0'}</p>
                  </div>
                )}
              </div>

              {lead.message && (
                <div className="mt-2 p-3 bg-slate-50 rounded-lg text-xs text-slate-600 italic">
                  "{lead.message}"
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {leads.length === 0 && !error && (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 border-dashed">
          <p className="text-slate-400 font-medium">No submissions found yet.</p>
        </div>
      )}
    </div>
  );
};
