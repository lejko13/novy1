import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gyms } from '../../lib/gymData';

export default function GymsCardsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="nase-posilnovne"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      <div className="motion-line absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">Lokácie</span>
          <h2 className="display-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            NAŠE<br />
            <span style={{ color: 'var(--electric-blue)' }}>POSILŇOVNE</span>
          </h2>
          <p className="mt-5 text-lg max-w-lg" style={{ color: 'var(--steel)' }}>
            Tri moderné prevádzky v Prešove a Košiciach. Nájdite si tú najbližšiu k vám.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {gyms.map((gym, i) => (
            <motion.div
              key={gym.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Link
                to={`/gym/${gym.slug}`}
                className="block group relative rounded-2xl overflow-hidden border border-white/5 hover:border-electric/30 transition-all duration-400"
                style={{ background: 'var(--asphalt)' }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={gym.bgImage}
                    alt={gym.fullName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'brightness(0.6) contrast(1.1)' }}
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(18,18,18,0.8) 0%, transparent 60%)' }}
                  />
                  {/* Color tag */}
                  <div
                    className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(7,7,7,0.7)',
                      color: gym.color,
                      fontFamily: 'var(--font-display)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {gym.tag}
                  </div>
                  {/* Blue line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{ background: `linear-gradient(90deg, transparent, ${gym.color}, transparent)` }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-black text-white mb-2"
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
                  >
                    {gym.fullName}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 line-clamp-2" style={{ color: 'var(--steel)' }}>
                    {gym.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--steel)' }}>
                      <MapPin size={12} style={{ color: gym.color }} />
                      {gym.address.split(',')[1]?.trim() || gym.address}
                    </div>
                    <span
                      className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest transition-colors group-hover:text-white"
                      style={{ color: 'var(--electric-blue)', fontFamily: 'var(--font-display)' }}
                    >
                      Detail <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="motion-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}