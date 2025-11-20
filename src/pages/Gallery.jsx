const brand = {
  blush: '#FFD8E3',
  cream: '#FFF7F1',
  cocoa: '#6D3E2E',
  gold: '#D9A441',
};

const categories = [
  { name: 'Weddings', images: [
    'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
  ]},
  { name: 'Celebrations', images: [
    'https://images.unsplash.com/photo-1599785209796-d85c66e2a3a4?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541781131744-995a8f1e3dfd?q=80&w=1200&auto=format&fit=crop',
  ]},
  { name: 'Cupcakes', images: [
    'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1535141192574-5b27a6b47319?q=80&w=1200&auto=format&fit=crop',
  ]},
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: brand.cocoa }}>Gallery</h2>
      <p className="mt-2 text-[15px]" style={{ color: '#5a2f22' }}>A look at recent work — softly styled and lovingly finished.</p>

      <div className="mt-8 space-y-12">
        {categories.map((cat) => (
          <div key={cat.name}>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold" style={{ color: brand.cocoa }}>{cat.name}</h3>
              <span className="h-px flex-1" style={{ background: brand.gold }} />
            </div>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.images.map((src, i) => (
                <img key={i} src={src} alt={`${cat.name} ${i+1}`} className="w-full aspect-[4/3] object-cover rounded-3xl border shadow-sm" style={{ borderColor: brand.blush }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
