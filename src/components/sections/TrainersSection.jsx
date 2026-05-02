import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

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
  {
    name: 'Tréner 2',
    role: 'Osobný tréner',
    bio: 'Informácie o trénerovi budú doplnené čoskoro. Kontaktujte nás pre viac informácií o dostupnosti trénerov.',
    motto: '"Každý tréning je krok vpred."',
    specializations: [
      'Silový tréning',
      'Kondičná príprava',
      'Výživa a regenerácia',
      'Funkčný tréning',
    ],
    instagram: '#',
    instagramHandle: '@cvic_sam',
    email: 'mailto:cvicsamgym@gmail.com',
    image: null,
  },
];

export default function TrainersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="treneri" ref={ref} className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">NAŠI TRÉNERI</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="p-6 rounded-xl bg-black/40">
              <h3 className="text-2xl font-bold">{trainer.name}</h3>
              <p>{trainer.role}</p>
              <p className="mt-2 text-sm opacity-70">{trainer.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}