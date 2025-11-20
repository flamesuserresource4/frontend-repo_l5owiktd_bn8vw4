import BakeryHero from '../components/BakeryHero';

const brand = {
  blush: '#FFD8E3',
  cream: '#FFF7F1',
  cocoa: '#6D3E2E',
  gold: '#D9A441',
};

function FeaturedCard({ title, img, desc }) {
  return (
    <div className="rounded-3xl overflow-hidden border shadow-sm bg-white" style={{ borderColor: brand.blush }}>
      <img src={img} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold" style={{ color: brand.cocoa }}>{title}</h3>
          <span className="h-px w-16" style={{ background: brand.gold }} />
        </div>
        <p className="mt-2 text-sm" style={{ color: '#5a2f22' }}>{desc}</p>
      </div>
    </div>
  );
}

function Testimonial({ quote, name }) {
  return (
    <div className="rounded-3xl p-6 bg-white border" style={{ borderColor: brand.blush }}>
      <p className="italic" style={{ color: '#5a2f22' }}>“{quote}”</p>
      <div className="mt-3 text-sm font-medium" style={{ color: brand.cocoa }}>— {name}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ background: brand.cream }}>
      <BakeryHero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: brand.cocoa }}>Featured Cakes</h2>
          <span className="h-px flex-1" style={{ background: brand.gold }} />
        </div>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Blush Petals', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200&auto=format&fit=crop', desc: 'Soft pink buttercream with delicate florals.' },
            { title: 'Golden Tier', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop', desc: 'Two-tier elegance with gold accents.' },
            { title: 'Cocoa Luxe', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476e?q=80&w=1200&auto=format&fit=crop', desc: 'Rich chocolate layers with a silky finish.' },
          ].map((c) => <FeaturedCard key={c.title} {...c} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: brand.cocoa }}>What Clients Say</h2>
          <span className="h-px flex-1" style={{ background: brand.gold }} />
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { quote: 'Absolutely the best cake we\'ve had — moist and beautiful!', name: 'Angela, Nairobi' },
            { quote: 'Our wedding cake was stunning and tasted amazing.', name: 'Brian & Joy' },
            { quote: 'Seamless ordering and thoughtful design. Highly recommend.', name: 'Muthoni' },
          ].map((t, i) => <Testimonial key={i} {...t} />)}
        </div>
      </section>
    </div>
  );
}
