import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    count: '3',
    label: 'vstupy',
    price: '22,05 €',
    perEntry: '7,35 € / vstup',
    highlight: false,
    features: [
      '3 samostatné rezervácie po 75 min',
      'Vhodné pre samostatný tréning',
      'Aj tréning vo dvojici',
      'Platba online cez Gymify',
    ],
    url: 'https://gymify.sk/gyms/cvic-sam/booking',
  },
  {
    count: '5',
    label: 'vstupov',
    price: '35 €',
    perEntry: '7,00 € / vstup',
    highlight: true,
    badge: 'Populárne',
    features: [
      '5 rezervácií po 75 minút',
      'Flexibilné využitie',
      'Vhodné pre pravidelný tréning',
      'Bez mesačnej viazanosti',
    ],
    url: 'https://client.gymify.app/sk?activeTab=register&gymUuid=a25632ae-e362-4c5a-85fc-26586eb3f2f5&gymName=Cvi%C4%8D%20S%C3%A1m',
  },
  {
    count: '10',
    label: 'vstupov',
    price: '60 €',
    perEntry: '6,00 € / vstup',
    badge: 'Akciová cena',
    highlight: false,
    features: [
      '10 rezervácií po 75 minút',
      'Štandardná cena 65 €',
      'Akciová cena 60 €',
      'Akcia platí do 30. 4. 2026',
    ],
    url: 'https://client.gymify.app/sk?activeTab=register&gymUuid=a25632ae-e362-4c5a-85fc-26586eb3f2f5&gymName=Cvi%C4%8D%20S%C3%A1m',
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="cennik"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-label block mb-4">Vstupné</span>
          <h2 className="display-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            CENNÍK
          </h2>
          <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: 'var(--steel)' }}>
            Vyberte si jednorazový vstup alebo výhodný balík. Žiadna mesačná viazanosť.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.count}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 group ${
                plan.highlight
                  ? 'border-electric/40 animate-pulse-glow'
                  : 'border-white/5 hover:border-electric/20'
              }`}
              style={{
                background: plan.highlight
                  ? 'linear-gradient(135deg, rgba(74,158,255,0.08) 0%, var(--asphalt) 100%)'
                  : 'var(--asphalt)',
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{
                    background: plan.highlight ? 'var(--electric-blue)' : 'rgba(74,158,255,0.15)',
                    color: plan.highlight ? 'var(--obsidian)' : 'var(--electric-blue)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <div
                  className="text-6xl font-black leading-none mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: plan.highlight ? 'var(--electric-blue)' : '#ffffff',
                    letterSpacing: '-0.05em',
                  }}
                >
                  {plan.count}
                </div>
                <div
                  className="text-base uppercase tracking-widest font-semibold"
                  style={{ color: 'var(--steel)', fontFamily: 'var(--font-display)' }}
                >
                  {plan.label}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  {plan.price}
                </div>
                <div className="text-sm" style={{ color: 'var(--steel)' }}>{plan.perEntry}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'var(--steel)' }}>
                    <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--electric-blue)' }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
              >
                Kúpiť balík
              </a>
            </motion.div>
          ))}
        </div>

        {/* Single entry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl border border-white/5"
          style={{ background: 'var(--asphalt)' }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(74,158,255,0.1)' }}
            >
              <Zap size={18} style={{ color: 'var(--electric-blue)' }} />
            </div>
            <div>
              <div className="text-white font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                Jednorazový vstup
              </div>
              <div className="text-sm" style={{ color: 'var(--steel)' }}>Bez balíka, bez záväzkov</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>7,50 €</div>
            <a
              href="https://gymify.sk/gyms/cvic-sam/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 px-6 text-sm"
            >
              Rezervovať
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}