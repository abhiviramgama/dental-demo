import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description }) {
  const full = title ? `${title} | Pearl Dental Clinic` : 'Pearl Dental Clinic – Your Smile, Our Passion';
  const desc = description || 'Personalized, comfortable dental care for the whole family at Pearl Dental Clinic.';
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
