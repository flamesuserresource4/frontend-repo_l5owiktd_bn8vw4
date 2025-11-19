import { Link, NavLink } from 'react-router-dom';

const brand = {
  deepBlue: '#0C1F4A',
  blue: '#2E4C9A',
  cream: '#F7F4EE',
  grey: '#A3A3A3',
};

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-white bg-[#2E4C9A]' : 'text-white/80 hover:text-white hover:bg-white/10'
  }`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: brand.deepBlue }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold"
                 style={{ backgroundColor: brand.blue }}>
              NC
            </div>
            <div className="text-white">
              <div className="text-sm tracking-widest uppercase opacity-80">Nanga Courts</div>
              <div className="-mt-1 text-xs opacity-70">Student Residences</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/apartments" className={navLinkClass}>Apartments</NavLink>
            <NavLink to="/life" className={navLinkClass}>Life at Nanga</NavLink>
            <NavLink to="/apply" className={navLinkClass}>Apply Now</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
