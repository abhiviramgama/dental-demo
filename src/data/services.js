import { Stethoscope, Sparkles, Smile, Sun, Wrench, AlignCenter, Activity, Baby } from 'lucide-react';

export const services = [
  { slug: 'general-dentistry', icon: Stethoscope, name: 'General Dentistry', short: 'Routine checkups, examinations, and preventive oral care.', long: 'Regular examinations help spot concerns early and keep your teeth and gums healthy. Your dentist will explain what they find and the options available.' },
  { slug: 'teeth-cleaning', icon: Sparkles, name: 'Teeth Cleaning', short: 'Professional cleaning and oral hygiene support.', long: 'A professional cleaning removes plaque and tartar that brushing alone can miss, and you receive practical tips for your daily routine.' },
  { slug: 'cosmetic-dentistry', icon: Smile, name: 'Cosmetic Dentistry', short: 'Treatment options designed to improve smile appearance.', long: 'Discuss your smile goals and learn which cosmetic options may suit you, including their benefits and limitations.' },
  { slug: 'teeth-whitening', icon: Sun, name: 'Teeth Whitening', short: 'Professional guidance on teeth whitening options.', long: 'Learn which whitening approaches are appropriate for your teeth and what results are realistic.' },
  { slug: 'dental-implants', icon: Wrench, name: 'Dental Implants', short: 'Consultation and treatment planning for missing teeth.', long: 'Book a consultation to assess whether implants may be suitable and to understand the stages of treatment.' },
  { slug: 'orthodontics', icon: AlignCenter, name: 'Orthodontics', short: 'Assessment of teeth alignment and bite concerns.', long: 'An assessment looks at alignment and bite, and your dentist outlines the options that could help.' },
  { slug: 'root-canal-treatment', icon: Activity, name: 'Root Canal Treatment', short: 'Evaluation and treatment of certain problems affecting the dental pulp.', long: 'If a tooth is painful or infected, your dentist can evaluate whether root canal treatment is appropriate.' },
  { slug: 'pediatric-dentistry', icon: Baby, name: 'Pediatric Dentistry', short: 'Dental care focused on children’s oral health.', long: 'Child-friendly visits that build healthy habits and comfort with the dentist from an early age.' },
];
