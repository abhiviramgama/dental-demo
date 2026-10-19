import Seo from '../components/Seo';
import Heading from '../components/Heading';
import BookingForm from '../components/BookingForm';
import { Link } from 'react-router-dom';
import { Hero, Trust, AboutBlock, ServicesGrid, Why, TeamGrid, Process, Stories, Faq } from '../components/Sections';

export default function Home() {
  return (
    <>
      <Seo />
      <Hero /><Trust /><AboutBlock />
      <section className="section tint"><div className="container">
        <Heading center label="OUR SERVICES" title="Complete Care for Every Smile." text="Explore dental services designed around your oral health, comfort, and smile goals." />
        <ServicesGrid />
      </div></section>
      <Why />
      <section className="section"><div className="container">
        <Heading center title="Meet the People Behind Your Smile." />
        <TeamGrid />
        <p className="center"><Link to="/team" className="btn btn-ghost">Meet Our Team</Link></p>
      </div></section>
      <Process /><Stories /><Faq />
      <section className="section tint" id="book"><div className="container narrow">
        <Heading center title="Let’s Make Time for Your Smile." text="Get in touch with our team to discuss your dental care needs and arrange a convenient appointment." />
        <BookingForm />
      </div></section>
    </>
  );
}
