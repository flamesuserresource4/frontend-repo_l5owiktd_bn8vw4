const brand = {
  deepBlue: '#0C1F4A',
  blue: '#2E4C9A',
  cream: '#F7F4EE',
};

export default function Life() {
  return (
    <div style={{ backgroundColor: brand.cream }}>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold" style={{ color: brand.deepBlue }}>Life at Nanga</h1>
          <p className="mt-2 text-slate-600">Comfortable routines with reliable essentials and friendly community.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Item title="Laundry" desc="On-site laundry points with clear schedules." />
              <Item title="WiFi" desc="Strong connectivity in rooms and shared areas." />
              <Item title="Water Stability" desc="Reliable supply with backup systems." />
              <Item title="Community Spaces" desc="Quiet study zones and social lounges." />
              <Item title="Nearby Shops" desc="Groceries, cafes, and essentials within walking distance." />
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-medium text-slate-900">Map & Location</h2>
              <p className="mt-2 text-slate-600">Close to major campuses with easy transport links.</p>
              <div className="mt-4 aspect-video rounded-lg overflow-hidden">
                <iframe
                  title="Location Map"
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

function Item({ title, desc }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200">
      <div className="font-medium text-slate-900">{title}</div>
      <div className="text-slate-600 text-sm mt-1">{desc}</div>
    </div>
  );
}
