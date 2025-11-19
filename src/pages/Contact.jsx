const brand = {
  deepBlue: '#0C1F4A',
  blue: '#2E4C9A',
  cream: '#F7F4EE',
};

export default function Contact() {
  return (
    <div style={{ backgroundColor: brand.cream }}>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold" style={{ color: brand.deepBlue }}>Contact</h1>
          <p className="mt-2 text-slate-600">We’re here to help with applications and viewings.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl font-medium text-slate-900">WhatsApp</h2>
              <p className="mt-2 text-slate-600">Chat with our team for quick support.</p>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: brand.blue }}
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl font-medium text-slate-900">Directions & Office Hours</h2>
              <p className="mt-2 text-slate-600">Mon–Sat: 9:00am–5:30pm</p>
              <div className="mt-4 aspect-video rounded-lg overflow-hidden">
                <iframe
                  title="Directions Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=36.80%2C-1.29%2C36.84%2C-1.25&layer=mapnik"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
