import { Link, NavLink } from 'react-router-dom';

const brand = {
  blush: '#FFD8E3',
  cream: '#FFF7F1',
  cocoa: '#6D3E2E',
  gold: '#D9A441',
};

const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-full text-sm font-medium transition-colors border ` +
  (isActive
    ? `bg-[${brand.cocoa}] text-white border-transparent`
    : `text-[${brand.cocoa}] border-[${brand.blush}] hover:bg-[${brand.blush}]`);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b" style={{ borderColor: brand.blush }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold shadow-sm"
                 style={{ background: brand.cocoa, boxShadow: `0 4px 0 ${brand.gold}` }}>
              BB
            </div>
            <div className="leading-tight">
              <div className="text-sm tracking-[0.25em] uppercase" style={{ color: brand.cocoa }}>ButterBloom</div>
              <div className="text-xs opacity-80" style={{ color: brand.cocoa }}>Cakes</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/menu" className={navLinkClass}>Menu</NavLink>
            <NavLink to="/custom-orders" className={navLinkClass}>Custom Orders</NavLink>
            <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
