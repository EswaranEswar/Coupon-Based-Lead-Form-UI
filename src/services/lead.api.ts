const getBaseUrl = () => import.meta.env.VITE_API_URL || 'http://localhost:4000';

export const createLead = async (payload: any) => {
  const response = await fetch(`${getBaseUrl()}/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to submit lead');
  }

  return response.json();
};

export const getLeads = async () => {
  const response = await fetch(`${getBaseUrl()}/leads`);
  if (!response.ok) {
    throw new Error('Failed to fetch leads');
  }
  return response.json();
};