import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="section"><div className="container narrow center">
        <h1>404</h1><p className="lead">We couldn’t find that page.</p>
        <Link to="/" className="btn btn-primary">Back to Homepage</Link>
      </div></section>
    </>
  );
}
