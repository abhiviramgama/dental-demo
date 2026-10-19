// Connect a real backend by setting REACT_APP_BOOKING_ENDPOINT (no secrets in frontend code).
const ENDPOINT = process.env.REACT_APP_BOOKING_ENDPOINT;

export async function submitAppointment(data) {
  if (!ENDPOINT) return { ok: false, demo: true };
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return { ok: res.ok, demo: false };
  } catch {
    return { ok: false, demo: false };
  }
}
