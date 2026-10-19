import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, CalendarDays } from 'lucide-react';
import { clinic } from '../data/clinic';

const links = [['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/team', 'Our Team'], ['/#stories', 'Patient Stories'], ['/contact', 'Contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <div className="announce"><CalendarDays size={15} /> Taking care of your smile starts here. Book your visit today!</div>
      <header className="nav">
        <div className="container nav-in">
          <Link to="/" className="brand" onClick={close}>
            <span className="logo-mark">🦷</span>
            <span><b>Pearl Dental Clinic</b><small>Advanced Dental Care</small></span>
          </Link>
          <nav className={`menu${open ? ' open' : ''}`} aria-label="Main">
            {links.map(([to, label]) =>
              to.includes('#') ? (
                <Link key={to} to={to} onClick={close}>{label}</Link>
              ) : (
                <NavLink key={to} to={to} end={to === '/'} onClick={close}>{label}</NavLink>
              )
            )}
            <a className="phone-link" href={clinic.phoneHref}><Phone size={16} /> {clinic.phone}</a>
          </nav>
          <Link to="/contact#book" className="btn btn-primary nav-cta" onClick={close}>Book Appointment</Link>
          <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
