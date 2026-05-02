export default function Footer() {
  return (
    <footer
      className="relative py-12 border-t"
      style={{ background: 'var(--obsidian)', borderColor: 'rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <img
              src="https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/58cd524ad_civim-logo-modra.png"
              alt="Cvič Sám"
              className="h-8 w-auto mb-3"
            />
            <p className="text-sm" style={{ color: 'var(--steel)' }}>
              Súkromná posilňovňa — Prešov & Košice
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm" style={{ color: 'var(--steel)' }}>
            <div>
              <div className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-display)' }}>
                Pobočky
              </div>
              <div className="space-y-1.5">
                <div>Martina Beku</div>
                <div>Šváby</div>
                <div>Hronská KE</div>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-display)' }}>
                Kontakt
              </div>
              <div className="space-y-1.5">
                <div>cvicsamgym@gmail.com</div>
                <div>0948 939 074</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.25)' }}
        >
          <span>© {new Date().getFullYear()} Cvič Sám. Všetky práva vyhradené.</span>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61578983385535"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/cvic_sam/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@cvicsam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}