export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-smoke/[0.13] flex justify-between items-center flex-wrap gap-4">
      {/* Logo + copyright */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-ember to-warm-gold flex items-center justify-center">
          <span className="font-display text-[13px] font-bold text-white">E</span>
        </div>
        <span className="font-display text-base font-bold">Ember</span>
        <span className="text-xs text-smoke ml-2">&copy; 2026</span>
      </div>

      <a
        href="https://www.instagram.com/tho_norlha_/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-smoke text-[13px] hover:text-firelight transition-colors"
      >
        Instagram
      </a>
    </footer>
  );
}
