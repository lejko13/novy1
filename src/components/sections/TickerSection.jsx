export default function TickerSection() {
  const items = [
    'SÚKROMNÉ FITKO',
    'PREŠOV',
    'KOŠICE',
    '75 MINÚT',
    'BEZ ČAKANIA',
    'CVIČ SÁM',
    '100% SÚKROMIE',
    'GYMIFY',
    'REZERVUJ ONLINE',
    'SILOVÝ TRÉNING',
  ];
  const doubled = [...items, ...items];

  return (
    <div
      className="relative py-4 overflow-hidden border-y"
      style={{ borderColor: 'rgba(74,158,255,0.15)', background: 'var(--asphalt)' }}
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-xs font-bold uppercase tracking-widest px-6"
              style={{ color: 'var(--steel)', fontFamily: 'var(--font-display)' }}
            >
              {item}
            </span>
            <span style={{ color: 'var(--electric-blue)', opacity: 0.4 }}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}