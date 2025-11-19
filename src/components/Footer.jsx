const brand = {
  deepBlue: '#0C1F4A',
  blue: '#2E4C9A',
  cream: '#F7F4EE',
  grey: '#A3A3A3',
};

export default function Footer() {
  return (
    <footer className="mt-16" style={{ backgroundColor: brand.deepBlue }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-6 text-white/80">
          <div>
            <div className="text-white font-semibold">Nanga Courts</div>
            <p className="text-sm mt-2 opacity-80">Safe, organized student living in Kenya.</p>
          </div>
          <div>
            <div className="text-white font-semibold">Visit</div>
            <p className="text-sm mt-2 opacity-80">Mon–Sat: 9:00am–5:30pm</p>
          </div>
          <div>
            <div className="text-white font-semibold">Contact</div>
            <a className="text-sm mt-2 block hover:underline" href="https://wa.me/254700000000" target="_blank" rel="noreferrer">WhatsApp us</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/60">© {new Date().getFullYear()} Nanga Courts. All rights reserved.</div>
      </div>
    </footer>
  );
}
