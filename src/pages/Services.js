import Seo from '../components/Seo';
import Heading from '../components/Heading';
import { ServicesGrid } from '../components/Sections';

export default function Services() {
  return (
    <>
      <Seo title="Services" description="Explore dental services at Pearl Dental Clinic." />
      <section className="section"><div className="container">
        <Heading center label="OUR SERVICES" title="Complete Care for Every Smile." text="Explore dental services designed around your oral health, comfort, and smile goals." />
        <ServicesGrid />
      </div></section>
    </>
  );
}
