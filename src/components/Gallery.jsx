import { useState } from 'react';

const photos = [
  'https://images.unsplash.com/photo-1600585154340-1e4ce9a0423f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598928506311-bf6356f3e1ac?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop',
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((p) => (p - 1 + photos.length) % photos.length);
  const next = () => setIndex((p) => (p + 1) % photos.length);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-slate-900">Photo Gallery</h2>
          <div className="flex gap-2">
            <button onClick={prev} className="px-3 py-2 rounded-md bg-slate-100 hover:bg-slate-200">Prev</button>
            <button onClick={next} className="px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Next</button>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <img src={photos[index]} alt="Nanga Courts" className="w-full h-[420px] object-cover" />
        </div>
      </div>
    </section>
  );
}
