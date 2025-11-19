const brand = {
  deepBlue: '#0C1F4A',
  blue: '#2E4C9A',
  cream: '#F7F4EE',
};

export default function Apartments() {
  const plans = [
    { name: 'Single', price: 8000, features: ['Private room', 'Shared facilities', 'Study desk'] },
    { name: 'Bedsitter', price: 12000, features: ['Self-contained', 'Kitchenette', 'Spacious'] },
    { name: 'Shared', price: 6000, features: ['Two per room', 'Value option', 'Great community'] },
  ];

  return (
    <div style={{ backgroundColor: brand.cream }}>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold" style={{ color: brand.deepBlue }}>Apartments</h1>
          <p className="mt-2 text-slate-600">Choose the space that suits your lifestyle and budget.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {plans.map((p) => (
              <div key={p.name} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="text-slate-900 font-medium">{p.name}</div>
                <div className="mt-2 text-3xl font-semibold" style={{ color: brand.blue }}>KES {p.price.toLocaleString()}</div>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brand.blue }}></span>{f}</li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-lg py-2 text-white" style={{ backgroundColor: brand.blue }}>Apply for {p.name}</button>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-medium" style={{ color: brand.deepBlue }}>Amenities</h2>
            <ul className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-slate-700">
              <li className="bg-white p-4 rounded-lg border border-slate-200">High-speed WiFi</li>
              <li className="bg-white p-4 rounded-lg border border-slate-200">24/7 Security</li>
              <li className="bg-white p-4 rounded-lg border border-slate-200">Reliable Water</li>
              <li className="bg-white p-4 rounded-lg border border-slate-200">Laundry Area</li>
              <li className="bg-white p-4 rounded-lg border border-slate-200">Study Spaces</li>
              <li className="bg-white p-4 rounded-lg border border-slate-200">Community Lounge</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
