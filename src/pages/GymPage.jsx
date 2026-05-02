import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, Check, ArrowLeft } from 'lucide-react';
import { gyms } from '../lib/gymData';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function GymPage() {
  const { slug } = useParams();
  const gym = gyms.find((g) => g.slug === slug);

  if (!gym) {
    return (
      <div style={{ background: 'var(--obsidian)', minHeight: '100vh' }} className="flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl mb-4">Pobočka nenájdená.</p>
          <Link to="/" className="btn-primary inline-block">Späť domov</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--obsidian)', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden grain-overlay">
        <img
          src={gym.heroImage}
          alt={gym.fullName}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.45) contrast(1.15)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(7,7,7,1) 0%, rgba(7,7,7,0.4) 60%, rgba(7,7,7,0.15) 100%)' }}
        />
        {/* Blue accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${gym.color}, transparent)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-widest transition-colors"
              style={{ color: 'var(--steel)', fontFamily: 'var(--font-display)' }}
            >
              <ArrowLeft size={13} /> Všetky pobočky
            </Link>
            <span
              className="block text-xs uppercase tracking-widest mb-3 font-semibold"
              style={{ color: gym.color, fontFamily: 'var(--font-display)' }}
            >
              {gym.tag}
            </span>
            <h1
              className="display-heading mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
            >
              {gym.fullName}
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-4">
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--steel)' }}>
                <MapPin size={14} style={{ color: gym.color }} />
                {gym.address}
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--steel)' }}>
                <Clock size={14} style={{ color: gym.color }} />
                {gym.hours}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24" style={{ background: 'var(--obsidian)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left – Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="section-label block mb-4">O pobočke</span>
              <h2
                className="display-heading mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
              >
                VÁŠE SÚKROMNÉ<br />
                <span style={{ color: 'var(--electric-blue)' }}>FITKO</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--steel)' }}>
                {gym.description}
              </p>
              <a
                href={gym.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Rezervovať termín <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* Right – Features + Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Features */}
              <div
                className="p-8 rounded-2xl border border-white/5"
                style={{ background: 'var(--asphalt)' }}
              >
                <h3
                  className="text-base font-bold mb-5 uppercase tracking-widest text-white"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem' }}
                >
                  Vybavenie & služby
                </h3>
                <ul className="space-y-3">
                  {gym.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: 'var(--steel)' }}>
                      <Check size={14} style={{ color: 'var(--electric-blue)', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map CTA */}
              <div
                className="p-6 rounded-2xl border border-white/5 flex items-center justify-between gap-4"
                style={{ background: 'var(--asphalt)' }}
              >
                <div>
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--steel)', fontFamily: 'var(--font-display)' }}>Adresa</div>
                  <div className="text-white font-medium" style={{ fontFamily: 'var(--font-display)' }}>{gym.address}</div>
                </div>
                <a
                  href={gym.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs py-2.5 px-5 flex items-center gap-2 flex-shrink-0"
                >
                  <MapPin size={13} /> Mapa
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="pb-24" style={{ background: 'var(--obsidian)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="motion-line mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[gym.bgImage, gym.heroImage,
              'https://cvicsam.sk/wp-content/uploads/2025/11/foto_fitko-005-scaled.jpg',
              'https://cvicsam.sk/wp-content/uploads/2025/11/foto_fitko-010-scaled.jpg',
              'https://cvicsam.sk/wp-content/uploads/2025/11/foto_fitko-016-scaled.jpg',
              'https://cvicsam.sk/wp-content/uploads/2025/11/foto_fitko-001-scaled.jpg',
            ].map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden"
                style={{ background: 'var(--asphalt)' }}
              >
                <img
                  src={src}
                  alt={`${gym.name} ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ filter: 'brightness(0.8) contrast(1.1)' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}