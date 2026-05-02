import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Ako prebieha rezervácia?',
    a: 'Rezervácia prebieha cez aplikáciu Gymify. Zaregistrujete sa, dobijete kredit a vyberiete si voľný tréningový slot. Každý slot trvá 75 minút.',
  },
  {
    q: 'Koľko ľudí môže cvičiť naraz?',
    a: 'Priestor je určený pre maximálne 3 osoby naraz – vy a dvaja ďalší (partner, kamarát alebo osobný tréner). Za ďalšie osoby neplatíte žiadne dodatočné poplatky.',
  },
  {
    q: 'Môžem si vziať deti so sebou?',
    a: 'Áno, môžete. Priestor je súkromný a bezpečný, takže rodičia môžu cvičiť pokojne aj s deťmi bez rušivých vplyvov okolia.',
  },
  {
    q: 'Ako sa dostanem do fitka?',
    a: 'V čase vašej rezervácie otvoríte fitko pomocou QR kódu alebo kódu v aplikácii Gymify. Nie je potrebný žiadny fyzický kľúč ani zamestnanec na mieste.',
  },
  {
    q: 'Aké vybavenie je k dispozícii?',
    a: 'K dispozícii sú kvalitné stroje, voľné váhy, činky a rôzne pomôcky pre silový aj kondičný tréning. Nechýba ani kávovar pre chvíľu relax po tréningu.',
  },
  {
    q: 'Je možné predlžiť tréning?',
    a: 'Dĺžka jedného slotu je pevne stanovená na 75 minút. Ak chcete trénovať dlhšie, je potrebné rezervovať viacero po sebe nasledujúcich slotov, ak sú dostupné.',
  },
  {
    q: 'Kde sa nachádzajú vaše pobočky?',
    a: 'Máme tri pobočky: Cvič Sám – Martina Beku (Martina Benku 7887/1A, Prešov), Cvič Sám – Šváby (Švábska 41/A, Prešov) a Cvič Sám – Hronská KE (Košice).',
  },
  {
    q: 'Ako funguje platba?',
    a: 'Platba prebieha bezpečne online platobnou kartou cez aplikáciu Gymify. Môžete si zakúpiť jednorazový vstup alebo výhodný vstupový balík.',
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-white/5"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group focus-visible:outline-electric/50 focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
        aria-expanded={isOpen}
      >
        <span
          className="text-base font-semibold pr-8 transition-colors group-hover:text-white"
          style={{
            color: isOpen ? '#ffffff' : 'rgba(255,255,255,0.8)',
            fontFamily: 'var(--font-display)',
          }}
        >
          {faq.q}
        </span>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen ? 'var(--electric-blue)' : 'rgba(74,158,255,0.1)',
          }}
        >
          {isOpen ? (
            <Minus size={13} style={{ color: isOpen ? 'var(--obsidian)' : 'var(--electric-blue)' }} />
          ) : (
            <Plus size={13} style={{ color: 'var(--electric-blue)' }} />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-base leading-relaxed" style={{ color: 'var(--steel)' }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="section-label block mb-4">Otázky</span>
            <h2 className="display-heading mb-6" style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)' }}>
              ČASTO<br />
              KLADENÉ<br />
              <span style={{ color: 'var(--electric-blue)' }}>OTÁZKY</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--steel)' }}>
              Nenašli ste odpoveď? Neváhajte nás kontaktovať priamo.
            </p>
            <a href="#kontakt" className="btn-primary inline-block">
              Kontaktovať nás
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}