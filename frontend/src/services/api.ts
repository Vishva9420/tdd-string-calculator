import { environment } from '../environments/environment';

const API_URL = environment.apiUrl;

export const calculateString = async (input: string) => {
  const response = await fetch(`${API_URL}/calculate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input }),
  });

  const data = await response.json();

  if (!response.ok) {
    // Extract and throw the actual error message
    throw new Error(data.error || 'API call failed');
  }

  return data;
};
