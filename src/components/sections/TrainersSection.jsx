import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Mail, ChevronRight } from 'lucide-react';

const trainers = [
  {
    name: 'Michaela',
    role: 'Certifikovaná trénerka',
    bio: 'Michaela je certifikovaná trénerka 1. stupňa so zameraním na ženskú klientelu. Pomáha ženám budovať silu, formovať postavu a vytvárať zdravší životný štýl bez extrémov.',
    motto: '"Pomôžem ti vytvoriť tvoje zdravšie ja po fyzickej aj mentálnej stránke."',
    specializations: [
      'Naberanie svalovej hmoty',
      'Redukcia telesnej hmotnosti',
      'Mobilita a držanie tela',
      'Formovanie postavy',
      'Stravovacie plány',
      'Diastáza a panvové dno',
    ],
    instagram: 'https://www.instagram.com/michell.coach/',
    instagramHandle: '@michell.coach',
    email: 'mailto:michell.onlinecoach@gmail.com',
    image: 'https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/9609b38fb_trener.jpg',
  },
<<<<<<< HEAD
  // {
  //   name: 'Tréner 2',
  //   role: 'Osobný tréner',
  //   bio: 'Informácie o trénerovi budú doplnené čoskoro. Kontaktujte nás pre viac informácií o dostupnosti trénerov.',
  //   motto: '"Každý tréning je krok vpred."',
  //   specializations: ['Silový tréning', 'Kondičná príprava', 'Výživa a regenerácia', 'Funkčný tréning'],
  //   instagram: '#',
  //   instagramHandle: '@cvic_sam',
  //   email: 'mailto:cvicsamgym@gmail.com',
  //   image: null,
  // },
=======
  {
    name: 'Tréner 2',
    role: 'Osobný tréner',
    bio: 'Informácie o trénerovi budú doplnené čoskoro. Kontaktujte nás pre viac informácií o dostupnosti trénerov.',
    motto: '"Každý tréning je krok vpred."',
    specializations: ['Silový tréning', 'Kondičná príprava', 'Výživa a regenerácia', 'Funkčný tréning'],
    instagram: '#',
    instagramHandle: '@cvic_sam',
    email: 'mailto:cvicsamgym@gmail.com',
    image: null,
  },
>>>>>>> d929236306f2b4bc40d0b7713dc45852b5980402
];

export default function TrainersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="treneri"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: 'var(--obsidian)' }}
    >
      <div className="motion-line absolute top-0 left-0 right-0" />

      {/* Ghost text */}
      <div
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center select-none pointer-events-none overflow-hidden"
        style={{ opacity: 0.025 }}
      >
        <div
          className="whitespace-nowrap text-white font-black"
          style={{ fontSize: 'clamp(6rem, 18vw, 20rem)', fontFamily: 'var(--font-display)', letterSpacing: '-0.05em' }}
        >
          EXPERTI &bull; SILA &bull; VÝSLEDKY
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">Odborníci</span>
          <h2 className="display-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            NAŠI<br />
            <span style={{ color: 'var(--electric-blue)' }}>TRÉNERI</span>
          </h2>
        </motion.div>

<<<<<<< HEAD
        <div className="grid lg:grid-cols-1 gap-8">
=======
        <div className="grid lg:grid-cols-2 gap-8">
>>>>>>> d929236306f2b4bc40d0b7713dc45852b5980402
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-electric/20 transition-all duration-400"
              style={{ background: 'var(--asphalt)' }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="sm:w-2/5 h-72 sm:h-auto relative overflow-hidden flex-shrink-0">
                  {trainer.image ? (
                    <>
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                        style={{ filter: 'grayscale(0.2) contrast(1.1)' }}
                      />
                      {/* Duotone hover effect overlay */}
                      <div
                        className="absolute inset-0 transition-opacity duration-500 opacity-30 group-hover:opacity-0"
                        style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(7,7,7,0.9) 100%), mix-blend-mode: multiply' }}
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(74,158,255,0.4), transparent 60%)' }}
                      />
                    </>
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: 'rgba(74,158,255,0.05)' }}
                    >
                      <span
                        className="text-6xl font-black opacity-10"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--electric-blue)' }}
                      >
                        CS
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-1 font-semibold" style={{ color: 'var(--electric-blue)', fontFamily: 'var(--font-display)' }}>
                      {trainer.role}
                    </div>
                    <h3
                      className="text-2xl font-black text-white mb-3"
                      style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
                    >
                      {trainer.name}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--steel)' }}>
                      {trainer.bio}
                    </p>
                    <p className="text-sm italic mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {trainer.motto}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {trainer.specializations.slice(0, 4).map((spec) => (
                        <span
                          key={spec}
                          className="text-xs px-2.5 py-1 rounded-full border"
                          style={{ borderColor: 'rgba(74,158,255,0.2)', color: 'var(--steel)', background: 'rgba(74,158,255,0.05)' }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={trainer.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                      style={{ color: 'var(--steel)' }}
                    >
                      <Instagram size={15} />
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                        {trainer.instagramHandle}
                      </span>
                    </a>
                    <a
                      href={trainer.email}
                      className="flex items-center gap-2 text-sm transition-colors hover:text-white ml-4"
                      style={{ color: 'var(--steel)' }}
                    >
                      <Mail size={15} />
                      <span className="text-xs" style={{ fontFamily: 'var(--font-display)' }}>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="motion-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}