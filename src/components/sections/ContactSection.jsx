import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:cvicsamgym@gmail.com?subject=Správa od ${form.name}&body=${encodeURIComponent(form.message + '\n\nOd: ' + form.name + '\nEmail: ' + form.email)}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass = "input-underline";

  return (
    <section
      id="kontakt"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: 'var(--obsidian)' }}
    >
      <div className="motion-line absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'var(--electric-blue)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – Heading + Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label block mb-4">Spojme sa</span>
            <h2
              className="display-heading mb-4"
              style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.9 }}
            >
              MÁŠ<br />
              <span style={{ color: 'var(--electric-blue)' }} className="glow-blue-text">
                OTÁZKY?
              </span>
            </h2>
            <p className="text-lg leading-relaxed mt-6 mb-12" style={{ color: 'var(--steel)' }}>
              Napíšte nám alebo zavolajte. Radi vám poradíme s výberom pobočky, trénera alebo vstupného balíka.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:cvicsamgym@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: 'rgba(74,158,255,0.1)' }}
                >
                  <Mail size={18} style={{ color: 'var(--electric-blue)' }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--steel)', fontFamily: 'var(--font-display)' }}>Email</div>
                  <div className="text-white font-medium group-hover:text-electric transition-colors">cvicsamgym@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+421948939074"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: 'rgba(74,158,255,0.1)' }}
                >
                  <Phone size={18} style={{ color: 'var(--electric-blue)' }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--steel)', fontFamily: 'var(--font-display)' }}>Telefón</div>
                  <div className="text-white font-medium group-hover:text-electric transition-colors">0948 939 074</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(74,158,255,0.1)' }}
                >
                  <MapPin size={18} style={{ color: 'var(--electric-blue)' }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--steel)', fontFamily: 'var(--font-display)' }}>Prevádzky</div>
                  <div className="text-white font-medium">Martina Benku 7887/1A, 080 01 Prešov</div>
                  <div className="text-white font-medium mt-1">Švábska 41/A, 080 05 Prešov</div>
                  <div className="text-white font-medium mt-1">Hronská, Košice</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578983385535"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-electric/40 transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/cvic_sam/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-electric/40 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@cvicsam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-electric/40 transition-all text-xs font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                TT
              </a>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--steel)', fontFamily: 'var(--font-display)' }}>
                  Vaše meno
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ján Novák"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--steel)', fontFamily: 'var(--font-display)' }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="jan@example.sk"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--steel)', fontFamily: 'var(--font-display)' }}>
                  Správa
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Vaša správa..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass}
                  style={{ resize: 'none' }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-3 py-4"
              >
                {sent ? (
                  'Odoslané!'
                ) : (
                  <>
                    Odoslať správu <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}