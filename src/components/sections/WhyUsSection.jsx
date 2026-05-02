import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lock, Zap, Baby, Users } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Fitko len pre vás',
    desc: 'Cvičíte úplne sami, s trénerom alebo maximálne s dvoma kamarátmi. Žiadny hluk, žiadne pohľady z okolia, iba súkromie a pokoj na tréning.',
  },
  {
    icon: Zap,
    title: 'Moderné vybavenie',
    desc: 'K dispozícii sú kvalitné stroje, činky a pomôcky pre rôzne typy tréningov. Nechýba ani kávovar na chvíľu oddychu po tréningu.',
  },
  {
    icon: Baby,
    title: 'Aj pre rodičov s deťmi',
    desc: 'Deti si môžete vziať so sebou. Priestor je súkromný, pohodlný a bez cudzích ľudí, takže si zacvičíte pokojnejšie a bez zbytočných starostí.',
  },
  {
    icon: Users,
    title: 'Traja za cenu jedného',
    desc: 'So sebou môžete vziať partnera, priateľov alebo osobného trénera. Za ďalšie osoby neplatíte žiadne dodatočné poplatky.',
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label block mb-4">Výhody</span>
            <h2 className="display-heading mb-6" style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)' }}>
              PREČO<br />
              <span style={{ color: 'var(--electric-blue)' }}>CVIČ SÁM?</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--steel)' }}>
              Súkromný priestor mení celý tréning. Prídete vo vlastnom čase, cvičíte bez davov a priestor využijete presne tak, ako potrebujete.
            </p>

            <div className="mt-10">
              <a
                href="https://gymify.sk/gyms/cvic-sam/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Vyskúšajte zdarma
              </a>
            </div>
          </motion.div>

          {/* Right - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-5 rounded-xl border border-white/5 hover:border-electric/20 transition-all duration-300"
                  style={{ background: 'var(--asphalt)' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'rgba(74,158,255,0.1)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--electric-blue)' }} />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    {feat.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--steel)' }}>
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}