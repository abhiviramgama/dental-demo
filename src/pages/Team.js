import Seo from '../components/Seo';
import Heading from '../components/Heading';
import { TeamGrid } from '../components/Sections';

export default function Team() {
  return (
    <>
      <Seo title="Our Team" description="Meet the dental team at Pearl Dental Clinic." />
      <section className="section"><div className="container">
        <Heading center title="Meet the People Behind Your Smile." text="Placeholder profiles – replace with real team details." />
        <TeamGrid />
      </div></section>
    </>
  );
}
