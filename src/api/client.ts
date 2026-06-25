const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiFetch(endpoint: string, options?: RequestInit) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}