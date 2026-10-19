import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
import BookingForm from '../components/BookingForm';
import { clinic } from '../data/clinic';

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description="Contact Pearl Dental Clinic or request an appointment." />
      <section className="section"><div className="container split top">
        <div>
          <Heading label="CONTACT" title="We’re Here to Help You Smile." text="Placeholder details – replace with the real clinic information." />
          <ul className="contact">
            <li><Phone size={18} /><a href={clinic.phoneHref}>{clinic.phone}</a></li>
            <li><Mail size={18} /><a href={`mailto:${clinic.email}`}>{clinic.email}</a></li>
            <li><MapPin size={18} />{clinic.address}</li>
            <li><Clock size={18} />{clinic.hours}</li>
          </ul>
          <div className="map">Google Maps embed placeholder</div>
          <a className="btn btn-ghost" href={clinic.mapsUrl} target="_blank" rel="noreferrer">Get Directions</a>
        </div>
        <div id="book"><BookingForm /></div>
      </div></section>
    </>
  );
}
