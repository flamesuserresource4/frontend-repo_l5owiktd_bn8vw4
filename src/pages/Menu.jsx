const brand = {
  blush: '#FFD8E3',
  cream: '#FFF7F1',
  cocoa: '#6D3E2E',
  gold: '#D9A441',
};

export default function Menu() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: brand.cocoa }}>Our Menu</h2>
      <p className="mt-2 text-[15px]" style={{ color: '#5a2f22' }}>Premium cakes, thoughtfully made. Choose a base, size, and finish.</p>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Celebration Cakes', desc: 'Birthdays, showers, graduations — joyful centrepieces for every milestone.', img: 'https://images.unsplash.com/photo-1599785209796-d85c66e2a3a4?q=80&w=800&auto=format&fit=crop' },
          { title: 'Wedding Cakes', desc: 'Elegant tiers with delicate finishes and romantic florals.', img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop' },
          { title: 'Cupcakes', desc: 'Perfectly swirled buttercream in seasonal flavours.', img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=800&auto=format&fit=crop' },
        ].map((c) => (
          <div key={c.title} className="rounded-3xl overflow-hidden border shadow-sm bg-white" style={{ borderColor: brand.blush }}>
            <img src={c.img} alt={c.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold" style={{ color: brand.cocoa }}>{c.title}</h3>
                <span className="h-px w-16" style={{ background: brand.gold }} />
              </div>
              <p className="mt-2 text-sm" style={{ color: '#5a2f22' }}>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl p-6 bg-white border" style={{ borderColor: brand.blush }}>
          <h4 className="text-lg font-semibold" style={{ color: brand.cocoa }}>Price Guide</h4>
          <ul className="mt-3 text-sm space-y-2" style={{ color: '#5a2f22' }}>
            <li>6" (6–8 servings): KES 3,500+</li>
            <li>8" (10–14 servings): KES 5,500+</li>
            <li>10" (20–24 servings): KES 9,000+</li>
            <li>Wedding tiers: custom per design</li>
          </ul>
        </div>
        <div className="rounded-3xl p-6 bg-white border" style={{ borderColor: brand.blush }}>
          <h4 className="text-lg font-semibold" style={{ color: brand.cocoa }}>Flavour Options</h4>
          <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm" style={{ color: '#5a2f22' }}>
            <ul className="space-y-1">
              <li>Vanilla bean</li>
              <li>Chocolate fudge</li>
              <li>Red velvet</li>
              <li>Lemon zest</li>
            </ul>
            <ul className="space-y-1">
              <li>Carrot & walnut</li>
              <li>Passionfruit</li>
              <li>Strawberry swirl</li>
              <li>Coconut cream</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
