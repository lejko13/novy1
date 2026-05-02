import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gyms as branches } from '../../lib/gymData';

export default function BranchesSection() {
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="pobocky"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: 'var(--obsidian)' }}
    >
      <div className="motion-line absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  <span className="section-label block mb-4">Lokácie</span>

  <h2
    className="display-heading"
    style={{
      fontSize: 'clamp(2.5rem, 5vw, 5rem)',
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
    }}
  >
    NAŠE<br />
    <span style={{ color: 'var(--electric-blue)' }}>
      POBOČKY
    </span>
  </h2>
</motion.div>
      </div>

      {/* Blade layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex h-[520px] mx-6 lg:mx-12 rounded-2xl overflow-hidden"
      >
        {branches.map((branch, i) => (
          <motion.div
            key={branch.id}
            className="relative overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-500"
            style={{
              flexBasis: hovered === branch.id ? '50%' : hovered ? '25%' : '33.333%',
            }}
            onMouseEnter={() => setHovered(branch.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Background */}
            <img
              src={branch.bgImage}
              alt={branch.fullName}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              style={{
                transform: hovered === branch.id ? 'scale(1.05)' : 'scale(1)',
                filter: hovered === branch.id ? 'brightness(0.6) contrast(1.15)' : 'brightness(0.3) contrast(1.1) grayscale(0.4)',
              }}
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to top, rgba(7,7,7,0.95) 0%, rgba(7,7,7,0.5) 50%, rgba(7,7,7,0.1) 100%)`,
              }}
            />

            {/* Blue edge line */}
            <div
              className="absolute top-0 bottom-0 left-0 w-px transition-opacity duration-300"
              style={{
                background: branch.color,
                opacity: hovered === branch.id ? 0.8 : 0.2,
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
              <div>
                <div
                  className="text-xs uppercase tracking-widest mb-2 font-semibold"
                  style={{ color: branch.color, fontFamily: 'var(--font-display)' }}
                >
                  {branch.tag}
                </div>
                <h3
                  className="text-xl lg:text-2xl font-black text-white mb-1"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
                >
                  {branch.name}
                </h3>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: hovered === branch.id ? 1 : 0, height: hovered === branch.id ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-start gap-2 mt-3 mb-1">
                    <MapPin size={13} style={{ color: 'var(--steel)', marginTop: 3, flexShrink: 0 }} />
                    <p className="text-sm" style={{ color: 'var(--steel)' }}>{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <Clock size={13} style={{ color: 'var(--steel)', flexShrink: 0 }} />
                    <p className="text-sm" style={{ color: 'var(--steel)' }}>{branch.hours}</p>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={branch.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-2.5 px-4 flex items-center gap-1.5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Rezervovať
                    </a>
                    <Link
                      to={`/gym/${branch.slug}`}
                      className="btn-outline text-xs py-2.5 px-4 flex items-center gap-1.5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Detail
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Number */}
            <div
              className="absolute top-6 right-6 text-4xl font-black opacity-10 select-none"
              style={{ fontFamily: 'var(--font-display)', color: branch.color, letterSpacing: '-0.05em' }}
            >
              0{i + 1}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile list */}
      <div className="lg:hidden mt-8 px-6 space-y-4">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="p-5 rounded-xl border border-white/5"
            style={{ background: 'var(--asphalt)' }}
          >
            <div className="text-xs uppercase tracking-widest mb-1 font-semibold" style={{ color: branch.color }}>
              {branch.tag}
            </div>
            <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              {branch.name}
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--steel)' }}>{branch.address}</p>
            <div className="flex gap-3">
              <a href={branch.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4">
                Rezervovať
              </a>
              <Link to={`/gym/${branch.slug}`} className="btn-outline text-xs py-2 px-4">
                Detail
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="motion-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}