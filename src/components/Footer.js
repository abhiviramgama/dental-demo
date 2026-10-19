import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { clinic } from '../data/clinic';
import { services } from '../data/services';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div>
          <h3>{clinic.name}</h3>
          <p>{clinic.tagline} Personalized, comfortable dental care for the whole family.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link><Link to="/services">Services</Link><Link to="/team">Our Team</Link><Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Our Services</h4>
          {services.slice(0, 5).map((s) => <Link key={s.slug} to={`/services/${s.slug}`}>{s.name}</Link>)}
        </div>
        <div>
          <h4>Contact</h4>
          <a href={clinic.phoneHref}>{clinic.phone}</a>
          <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
          <span>{clinic.address}</span>
        </div>
      </div>
      <div className="container foot-bottom">
        <span>© {new Date().getFullYear()} {clinic.name}. <Link to="/privacy-policy">Privacy Policy</Link></span>
        <span>Website by <b>Abh Viramgma</b> · <a href="tel:+919724126536">9724126536</a></span>
        <button className="btn btn-light" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={16} /> Top</button>
      </div>
    </footer>
  );
}
