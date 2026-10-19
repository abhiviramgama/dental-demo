import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/faqs';

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div className="faq-item" key={f.q}>
          <button aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
            {f.q} {open === i ? <Minus size={18} /> : <Plus size={18} />}
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div id={`faq-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                <p>{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
