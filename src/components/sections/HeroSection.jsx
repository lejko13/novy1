import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      glowRef.current.style.background =
        `radial-gradient(600px circle at ${x}% ${y}%, rgba(74,158,255,0.06), transparent 50%)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="domov"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grain-overlay"
      style={{ background: 'var(--obsidian)' }}
    >
      <div ref={glowRef} className="absolute inset-0 z-0 pointer-events-none transition-all duration-300" />

      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{ background: 'linear-gradient(to top, rgba(7,7,7,1) 0%, transparent 100%)' }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30"
          style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(74,158,255,0.12), transparent 60%)' }}
        />
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5 z-0 hidden md:block">
        <img
          src="/public/pozadie.jpg"
          alt="Tréner Cvič Sám"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.5) contrast(1.2)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, var(--obsidian) 0%, rgba(7,7,7,0.5) 40%, rgba(7,7,7,0.1) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="section-label">Súkromná posilňovňa — Prešov</span>
        </motion.div>

        <div className="max-w-3xl">
         <motion.h1
  className="display-heading mb-6"
  style={{
    fontSize: 'clamp(2rem, 6vw, 6rem)',
    lineHeight: 0.9,
  }}
>
  <span className="block">TVOJA</span>
  <span className="block" style={{ color: 'var(--electric-blue)' }}>
    CESTA
  </span>
  <span className="block">K VÝKONU</span>
</motion.h1>

          <motion.p
            className="text-lg mb-10 max-w-lg leading-relaxed"
            style={{ color: 'var(--steel)' }}
          >
            Súkromná posilňovňa iba pre vás. Rezervujete si termín, otvoríte dvere cez aplikáciu a celý priestor máte len pre seba.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://gymify.sk/gyms/cvic-sam/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              Rezervovať teraz <ArrowRight size={16} />
            </a>

            <button
              onClick={() =>
                document.querySelector('#ako-to-funguje')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-outline px-5"
            >
              Ako to funguje
            </button>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap gap-12">
          {[
            { value: '3', label: 'Pobočky' },
            { value: '75min', label: 'Tréningový slot' },
            { value: '100%', label: 'Súkromie' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-black mb-1" style={{ color: 'var(--electric-blue)' }}>
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-widest" style={{ color: 'var(--steel)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--steel)' }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={16} style={{ color: 'var(--electric-blue)' }} />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 motion-line" />
    </section>
  );
}