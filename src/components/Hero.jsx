import Spline from '@splinetool/react-spline';

const brand = {
  deepBlue: '#0C1F4A',
  blue: '#2E4C9A',
  cream: '#F7F4EE',
};

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden" style={{ backgroundColor: brand.cream }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="uppercase tracking-widest text-sm" style={{ color: brand.blue }}>Modern Student Housing</p>
            <h1 className="text-4xl sm:text-5xl font-semibold" style={{ color: brand.deepBlue }}>
              Modern Living for Modern Students.
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Calm, connected, and convenient — purpose-built residences with reliable WiFi, water, and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
