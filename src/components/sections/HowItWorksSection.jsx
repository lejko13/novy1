import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UserPlus, CreditCard, CalendarCheck, Dumbbell } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Registrácia',
    desc: 'V aplikácii Gymify si vytvoríte účet a zvolíte si Cvič Sám ako svoju posilňovňu.',
  },
  {
    number: '02',
    icon: CreditCard,
    title: 'Kredit',
    desc: 'Dobijete si kredit platobnou kartou alebo si vyberiete vstupový balík podľa vašich potrieb.',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Rezervácia',
    desc: 'Vyberiete si voľný čas. Jeden tréningový slot trvá 75 minút v úplnom súkromí.',
  },
  {
    number: '04',
    icon: Dumbbell,
    title: 'Tréning',
    desc: 'V čase rezervácie otvoríte fitko QR kódom a cvičíte v úplnom súkromí.',
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="ako-to-funguje"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: 'var(--obsidian)' }}
    >
      <div className="motion-line absolute top-0 left-0 right-0" />

      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'var(--electric-blue)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">Postup</span>
          <h2 className="display-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            AKO TO<br />
            <span style={{ color: 'var(--electric-blue)' }}>FUNGUJE</span>
          </h2>
          <p className="mt-6 text-lg max-w-lg" style={{ color: 'var(--steel)' }}>
            Proces je jednoduchý a samoobslužný. Všetko vybavíte v aplikácii Gymify, od registrácie až po otvorenie dverí.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative group"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                    style={{ background: 'linear-gradient(90deg, rgba(74,158,255,0.4), transparent)' }}
                  />
                )}

                <div
                  className="relative p-6 rounded-xl border border-white/5 overflow-hidden transition-all duration-400 group-hover:border-electric/30"
                  style={{ background: 'var(--asphalt)' }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-xl"
                    style={{ background: 'radial-gradient(circle at 50% 0%, rgba(74,158,255,0.08), transparent 70%)' }}
                  />

                  <div className="relative z-10">
                    <div
                      className="text-6xl font-black mb-6 opacity-10 select-none"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--electric-blue)', letterSpacing: '-0.05em', lineHeight: 1 }}
                    >
                      {step.number}
                    </div>

                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: 'rgba(74,158,255,0.1)' }}
                    >
                      <Icon size={20} style={{ color: 'var(--electric-blue)' }} />
                    </div>

                    <h3
                      className="text-xl font-bold mb-3 text-white"
                      style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--steel)' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* App badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex items-center gap-4"
        >
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10"
            style={{ background: 'var(--asphalt)' }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{ background: 'var(--electric-blue)', color: 'var(--obsidian)', fontFamily: 'var(--font-display)' }}
            >
              G
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--steel)' }}>Powered by</div>
              <div className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>Gymify App</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="motion-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}