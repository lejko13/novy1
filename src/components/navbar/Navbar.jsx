import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { gyms } from '../../lib/gymData';

const navItems = [
  { label: 'Domov', href: '#domov' },
  { label: 'Ako to funguje', href: '#ako-to-funguje' },
  {
    label: 'Naše posilňovne',
    href: '#pobocky',
    dropdown: gyms.map((g) => ({ label: g.fullName, href: `/gym/${g.slug}`, isRoute: true })),
  },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, isRoute = false) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    if (isRoute) {
      navigate(href);
      return;
    }
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-morph border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/58cd524ad_civim-logo-modra.png"
              alt="Cvič Sám"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    className="nav-link flex items-center gap-1"
                    onClick={() => setDropdownOpen(dropdownOpen === item.label ? false : item.label)}
                    onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                  >
                    {item.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${dropdownOpen === item.label ? 'rotate-180' : ''}`}
                      style={{ color: 'var(--steel)' }}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-3 glass-morph border border-white/10 rounded-lg overflow-hidden min-w-[220px]"
                      >
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => handleNavClick(sub.href, sub.isRoute)}
                            className="block w-full text-left px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-widest text-xs"
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://gymify.sk/gyms/cvic-sam/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block btn-primary text-sm py-2.5 px-5 relative z-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Rezervovať
            </a>
            <button
              className="lg:hidden p-2 transition-colors"
              style={{ color: 'var(--steel)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
            exit={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: 'rgba(7,7,7,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex-1 flex flex-col justify-center px-8 gap-2 overflow-y-auto py-24">
              {navItems.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 + 0.1 }}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-left w-full py-4 border-b border-white/5 group"
                  >
                    <span
                      className="text-2xl font-black text-white group-hover:text-electric transition-colors"
                      style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
                    >
                      {item.label}
                    </span>
                  </button>
                  {item.dropdown && (
                    <div className="pl-4 pb-2 space-y-1">
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleNavClick(sub.href, sub.isRoute)}
                          className="block w-full text-left py-2 text-sm"
                          style={{ color: 'var(--steel)', fontFamily: 'var(--font-display)' }}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                href="https://gymify.sk/gyms/cvic-sam/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-8"
              >
                Rezervovať teraz
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}