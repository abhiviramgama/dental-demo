import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="card service">
      <span className="icon-box"><Icon size={24} /></span>
      <h3>{service.name}</h3>
      <p>{service.short}</p>
      <Link to={`/services/${service.slug}`} className="more">Learn More <ArrowRight size={16} /></Link>
    </article>
  );
}
