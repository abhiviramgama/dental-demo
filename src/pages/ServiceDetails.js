import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import NotFound from './NotFound';
import { services } from '../data/services';

export default function ServiceDetails() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  if (!s) return <NotFound />;
  const Icon = s.icon;
  return (
    <>
      <Seo title={s.name} description={s.short} />
      <section className="section"><div className="container narrow">
        <span className="icon-box big"><Icon size={32} /></span>
        <h1>{s.name}</h1>
        <p className="lead">{s.short}</p>
        <p>{s.long}</p>
        <p className="small">This page gives general information only and is not personal medical advice. Outcomes vary from person to person.</p>
        <div className="btn-row"><Link to="/contact#book" className="btn btn-primary">Book a Consultation</Link><Link to="/services" className="btn btn-ghost">All Services</Link></div>
      </div></section>
    </>
  );
}
