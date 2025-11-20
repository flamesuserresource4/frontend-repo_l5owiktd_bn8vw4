const brand = {
  blush: '#FFD8E3',
  cream: '#FFF7F1',
  cocoa: '#6D3E2E',
  gold: '#D9A441',
};

export default function Footer() {
  return (
    <footer className="mt-16" style={{ background: brand.cream }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-6" style={{ color: '#5a2f22' }}>
          <div>
            <div className="font-semibold" style={{ color: brand.cocoa }}>ButterBloom Cakes</div>
            <p className="text-sm mt-2 opacity-90">Handcrafted cakes in Nairobi, Kenya.</p>
          </div>
          <div>
            <div className="font-semibold" style={{ color: brand.cocoa }}>Visit</div>
            <p className="text-sm mt-2 opacity-90">Mon–Sat: 9:00am–5:30pm</p>
          </div>
          <div>
            <div className="font-semibold" style={{ color: brand.cocoa }}>Contact</div>
            <a className="text-sm mt-2 block underline" href="https://wa.me/254700000000" target="_blank" rel="noreferrer">WhatsApp us</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-xs opacity-80" style={{ borderColor: brand.blush, color: '#5a2f22' }}>© {new Date().getFullYear()} ButterBloom Cakes. All rights reserved.</div>
      </div>
    </footer>
  );
}
