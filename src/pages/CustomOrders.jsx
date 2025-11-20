import { useState } from 'react';

const brand = {
  blush: '#FFD8E3',
  cream: '#FFF7F1',
  cocoa: '#6D3E2E',
  gold: '#D9A441',
};

export default function CustomOrders() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', occasion: 'Celebration', size: '8"', flavour: 'Vanilla bean', designNotes: '', delivery: 'pickup', date: '' });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); alert('Thank you! We\'ll confirm your order shortly.'); };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: brand.cocoa }}>Custom Order</h2>
      <p className="mt-2 text-[15px]" style={{ color: '#5a2f22' }}>Share your vision and we\'ll craft it with care.</p>

      <form onSubmit={submit} className="mt-8 grid gap-5 bg-white p-6 rounded-3xl border shadow-sm" style={{ borderColor: brand.blush }}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm" style={{ color: brand.cocoa }}>Name</label>
            <input name="name" value={form.name} onChange={update} className="mt-1 w-full rounded-xl border px-3 py-2" style={{ borderColor: brand.blush }} required />
          </div>
          <div>
            <label className="text-sm" style={{ color: brand.cocoa }}>Phone</label>
            <input name="phone" value={form.phone} onChange={update} className="mt-1 w-full rounded-xl border px-3 py-2" style={{ borderColor: brand.blush }} required />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm" style={{ color: brand.cocoa }}>Email</label>
            <input type="email" name="email" value={form.email} onChange={update} className="mt-1 w-full rounded-xl border px-3 py-2" style={{ borderColor: brand.blush }} />
          </div>
          <div>
            <label className="text-sm" style={{ color: brand.cocoa }}>Event date</label>
            <input type="date" name="date" value={form.date} onChange={update} className="mt-1 w-full rounded-xl border px-3 py-2" style={{ borderColor: brand.blush }} required />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm" style={{ color: brand.cocoa }}>Occasion</label>
            <select name="occasion" value={form.occasion} onChange={update} className="mt-1 w-full rounded-xl border px-3 py-2 bg-white" style={{ borderColor: brand.blush }}>
              <option>Celebration</option>
              <option>Wedding</option>
              <option>Cupcakes</option>
            </select>
          </div>
          <div>
            <label className="text-sm" style={{ color: brand.cocoa }}>Size</label>
            <select name="size" value={form.size} onChange={update} className="mt-1 w-full rounded-xl border px-3 py-2 bg-white" style={{ borderColor: brand.blush }}>
              <option>6"</option>
              <option>8"</option>
              <option>10"</option>
              <option>Tiered</option>
            </select>
          </div>
          <div>
            <label className="text-sm" style={{ color: brand.cocoa }}>Flavour</label>
            <select name="flavour" value={form.flavour} onChange={update} className="mt-1 w-full rounded-xl border px-3 py-2 bg-white" style={{ borderColor: brand.blush }}>
              <option>Vanilla bean</option>
              <option>Chocolate fudge</option>
              <option>Red velvet</option>
              <option>Lemon zest</option>
              <option>Carrot & walnut</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm" style={{ color: brand.cocoa }}>Design notes</label>
          <textarea name="designNotes" value={form.designNotes} onChange={update} className="mt-1 w-full rounded-xl border px-3 py-2 min-h-[120px]" style={{ borderColor: brand.blush }} placeholder="Colours, inspiration, inscription…" />
        </div>

        <div>
          <label className="text-sm" style={{ color: brand.cocoa }}>Delivery</label>
          <div className="mt-2 flex gap-4 text-sm" style={{ color: '#5a2f22' }}>
            <label className="inline-flex items-center gap-2"><input type="radio" name="delivery" value="pickup" checked={form.delivery==='pickup'} onChange={update} /> Pickup</label>
            <label className="inline-flex items-center gap-2"><input type="radio" name="delivery" value="delivery" checked={form.delivery==='delivery'} onChange={update} /> Delivery (Nairobi)</label>
          </div>
        </div>

        <button className="mt-2 inline-flex self-start px-5 py-3 rounded-full font-medium shadow-sm" style={{ background: brand.cocoa, color: 'white', boxShadow: `0 4px 0 ${brand.gold}` }}>Send Request</button>
      </form>
    </div>
  );
}
