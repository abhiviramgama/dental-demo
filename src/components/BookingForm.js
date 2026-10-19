import { useState } from 'react';
import { services } from '../data/services';
import { submitAppointment } from '../services/appointmentService';

const empty = { name: '', phone: '', email: '', service: services[0].name, date: '', time: '', message: '' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Please enter your full name.';
  if (!/^[+\d][\d\s-]{6,14}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number.';
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = 'Enter a valid email address.';
  if (!v.date) e.date = 'Choose a preferred date.';
  if (!v.time) e.time = 'Choose a preferred time.';
  return e;
}

export default function BookingForm() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', msg: '' });
  const set = (k) => (ev) => setV({ ...v, [k]: ev.target.value });

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus({ state: 'loading', msg: '' });
    const res = await submitAppointment(v);
    if (res.ok) { setStatus({ state: 'success', msg: 'Thank you! Your request has been sent. The clinic will contact you to confirm.' }); setV(empty); }
    else if (res.demo) setStatus({ state: 'demo', msg: 'Demo mode: your details are valid, but no booking service is connected yet, so nothing was sent. Please call the clinic to book.' });
    else setStatus({ state: 'error', msg: 'Sorry, we could not send your request. Please try again or call the clinic.' });
  };

  const field = (k, label, type = 'text', extra = {}) => (
    <label className="field">{label}
      <input type={type} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} {...extra} />
      {errors[k] && <span className="err" role="alert">{errors[k]}</span>}
    </label>
  );

  return (
    <form className="card form" onSubmit={onSubmit} noValidate>
      {field('name', 'Full name', 'text', { autoComplete: 'name' })}
      <div className="two">{field('phone', 'Phone number', 'tel', { autoComplete: 'tel' })}{field('email', 'Email address', 'email', { autoComplete: 'email' })}</div>
      <label className="field">Preferred service
        <select value={v.service} onChange={set('service')}>{services.map((s) => <option key={s.slug}>{s.name}</option>)}</select>
      </label>
      <div className="two">{field('date', 'Preferred date', 'date')}{field('time', 'Preferred time', 'time')}</div>
      <label className="field">Additional message
        <textarea rows="3" value={v.message} onChange={set('message')} />
      </label>
      <button className="btn btn-primary" disabled={status.state === 'loading'}>{status.state === 'loading' ? 'Sending…' : 'Request Appointment'}</button>
      {status.msg && <p className={`notice ${status.state}`} role="status">{status.msg}</p>}
    </form>
  );
}
