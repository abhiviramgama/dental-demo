import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, HeartHandshake, MessageCircle, Smile, ShieldCheck, Clock, Users, Cpu, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Heading from './Heading';
import Reveal from './Reveal';
import ServiceCard from './ServiceCard';
import FAQAccordion from './FAQAccordion';
import { services } from '../data/services';
import { dentists } from '../data/dentists';
import { testimonials } from '../data/testimonials';

export function Hero() {
  return (
    <section className="hero"><div className="container hero-grid">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="badge">YOUR PARTNER IN ORAL HEALTH</span>
        <h1>Confident Smiles Begin With <em>Exceptional Care.</em></h1>
        <p>Experience personalized dental care in a comfortable, modern environment. From routine checkups to smile transformations, we are here to help you smile with confidence.</p>
        <div className="btn-row">
          <Link to="/contact#book" className="btn btn-primary"><CalendarDays size={18} /> Book an Appointment</Link>
          <Link to="/services" className="btn btn-ghost">Explore Our Services <ArrowRight size={18} /></Link>
        </div>
        <ul className="ticks"><li>Personalized Dental Care</li><li>Modern Treatment Approach</li><li>Patient-First Experience</li></ul>
      </motion.div>
      <div className="hero-art" role="img" aria-label="Illustration of a healthy smiling tooth">
        <svg viewBox="0 0 64 64"><path d="M32 8c-7-5-20-2-20 12 0 9 4 12 5 22 1 8 4 14 8 14 5 0 4-12 7-12s2 12 7 12c4 0 7-6 8-14 1-10 5-13 5-22C52 6 39 3 32 8z" fill="#fff"/><path d="M24 24q8 8 16 0" stroke="#0B6B66" strokeWidth="2.5" strokeLinecap="round" fill="none"/></svg>
        <div className="float f1"><Smile size={20} /><span><b>Your Smile Matters</b><small>Care tailored to you</small></span></div>
        <div className="float f2"><Heart size={20} /><span><b>Patient-First Care</b><small>Comfort at every visit</small></span></div>
      </div>
    </div></section>
  );
}

const trust = [[HeartHandshake, 'Personalized Treatment Plans'], [Users, 'Friendly Dental Team'], [Cpu, 'Modern Dental Technology'], [ShieldCheck, 'Comfortable Patient Experience']];
export function Trust() {
  return (
    <section className="trust"><div className="container grid4">
      {trust.map(([I, t], i) => <Reveal key={t} delay={i * 0.08} className="trust-item"><I size={24} /><b>{t}</b></Reveal>)}
    </div></section>
  );
}

const points = [[HeartHandshake, 'Personalized Care'], [MessageCircle, 'Clear Communication'], [Smile, 'Comfort-Focused Visits']];
export function AboutBlock() {
  return (
    <section className="section"><div className="container split">
      <Reveal className="art-card"><span>🦷</span><small>Clinic photo placeholder</small></Reveal>
      <Reveal>
        <Heading label="ABOUT PEARL DENTAL CLINIC" title="Care That Goes Beyond Your Smile." text="We believe exceptional dental care starts with understanding each patient’s needs. Our goal is to make every visit welcoming, comfortable, and focused on your long-term oral health." />
        <ul className="points">{points.map(([I, t]) => <li key={t}><span className="icon-box"><I size={20} /></span>{t}</li>)}</ul>
        <Link to="/about" className="btn btn-primary">Learn More</Link>
      </Reveal>
    </div></section>
  );
}

export function ServicesGrid({ limit }) {
  return (
    <div className="grid3">
      {services.slice(0, limit).map((s, i) => <Reveal key={s.slug} delay={(i % 3) * 0.08}><ServiceCard service={s} /></Reveal>)}
    </div>
  );
}

const why = [[Users, 'Personalized Attention'], [MessageCircle, 'Clear Treatment Explanations'], [Heart, 'Comfort-Focused Environment'], [Clock, 'Preventive Care Approach']];
export function Why() {
  return (
    <section className="section mint"><div className="container split">
      <Reveal>
        <Heading title="A Better Dental Experience Starts Here." />
        <ul className="points">{why.map(([I, t]) => <li key={t}><span className="icon-box"><I size={20} /></span>{t}</li>)}</ul>
      </Reveal>
      <Reveal className="art-card"><span>🪥</span><small>Treatment room photo placeholder</small></Reveal>
    </div></section>
  );
}

export function TeamGrid() {
  return (
    <div className="grid3">
      {dentists.map((d, i) => (
        <Reveal key={d.name} delay={i * 0.08}>
          <article className="card dentist">
            <div className="avatar">{d.name.split(' ').pop()[0]}</div>
            <h3>{d.name}</h3><b className="role">{d.role}</b><small>{d.area}</small><p>{d.bio}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

const steps = ['Book Your Visit', 'Discuss Your Concerns', 'Receive Your Treatment Plan', 'Continue Your Dental Care'];
export function Process() {
  return (
    <section className="section"><div className="container">
      <Heading center title="Your Journey to a Healthier Smile." />
      <ol className="steps">{steps.map((s, i) => <Reveal key={s} delay={i * 0.1}><li><span>{i + 1}</span><b>{s}</b></li></Reveal>)}</ol>
    </div></section>
  );
}

export function Stories() {
  return (
    <section className="section mint" id="stories"><div className="container">
      <Heading center title="Kind Words From Our Patients." text="Sample content – replace with genuine patient feedback." />
      <div className="grid3">
        {testimonials.map((t, i) => <Reveal key={t.name} delay={i * 0.08}><blockquote className="card"><p>“{t.text}”</p><footer>{t.name}</footer></blockquote></Reveal>)}
      </div>
    </div></section>
  );
}

export function Faq() {
  return (
    <section className="section"><div className="container narrow">
      <Heading center title="Frequently Asked Questions." />
      <FAQAccordion />
    </div></section>
  );
}
