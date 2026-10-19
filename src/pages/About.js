import Seo from '../components/Seo';
import { AboutBlock, Why, Process } from '../components/Sections';

export default function About() {
  return (<><Seo title="About Us" description="Learn about Pearl Dental Clinic and our patient-first approach." /><div className="page-top"><h1>About Us</h1></div><AboutBlock /><Why /><Process /></>);
}
