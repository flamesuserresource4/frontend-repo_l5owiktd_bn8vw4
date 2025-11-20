const brand = {
  blush: '#FFD8E3',
  cream: '#FFF7F1',
  cocoa: '#6D3E2E',
  gold: '#D9A441',
};

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: brand.cocoa }}>Get in Touch</h2>
      <p className="mt-2 text-[15px]" style={{ color: '#5a2f22' }}>We\'d love to bake for you. Reach out to plan something beautiful.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl p-6 bg-white border" style={{ borderColor: brand.blush }}>
          <h3 className="text-lg font-semibold" style={{ color: brand.cocoa }}>Say hello</h3>
          <ul className="mt-3 text-sm space-y-2" style={{ color: '#5a2f22' }}>
            <li>WhatsApp: <a href="https://wa.me/254700000000" className="underline">+254 700 000 000</a></li>
            <li>Email: hello@butterbloom.co.ke</li>
            <li>Hours: Mon–Sat 9:00–17:30</li>
            <li>Location: Nairobi, Kenya</li>
          </ul>
        </div>
        <div className="rounded-3xl overflow-hidden border" style={{ borderColor: brand.blush }}>
          <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.874558919221!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4d99b2e39%3A0x2c9b0a!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1700000000000" width="100%" height="320" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}
