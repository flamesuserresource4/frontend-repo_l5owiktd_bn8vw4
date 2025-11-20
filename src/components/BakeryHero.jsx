const brand = {
  blush: '#FFD8E3',
  cream: '#FFF7F1',
  cocoa: '#6D3E2E',
  gold: '#D9A441',
};

export default function BakeryHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${brand.blush}33, ${brand.cream})` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4" style={{ background: brand.blush, color: brand.cocoa }}>
              <span className="w-2 h-2 rounded-full" style={{ background: brand.gold }} />
              Handcrafted in Kenya
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight" style={{ color: brand.cocoa }}>
              ButterBloom Cakes
            </h1>
            <p className="mt-4 text-lg/8 max-w-prose" style={{ color: '#5a2f22' }}>
              Elegant, soft and utterly delicious. We bake premium celebration and wedding cakes with a warm, personal touch.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/menu" className="px-5 py-3 rounded-full font-medium shadow-sm" style={{ background: brand.cocoa, color: 'white', boxShadow: `0 4px 0 ${brand.gold}` }}>Explore Menu</a>
              <a href="/custom-orders" className="px-5 py-3 rounded-full font-medium border" style={{ borderColor: brand.cocoa, color: brand.cocoa }}>Custom Order</a>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <div className="h-px flex-1" style={{ background: brand.gold }} />
              <p className="text-sm italic" style={{ color: '#5a2f22' }}>
                “Crafted With Intention, Designed With Heart”
              </p>
              <div className="h-px flex-1" style={{ background: brand.gold }} />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-30" style={{ background: brand.blush }} />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20" style={{ background: brand.gold }} />
            <img
              src="https://images.unsplash.com/photo-1612208695882-00f6628d2d32?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury cake on pedestal"
              className="w-full aspect-[4/3] object-cover rounded-[2rem] shadow-lg border"
              style={{ borderColor: brand.blush }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
