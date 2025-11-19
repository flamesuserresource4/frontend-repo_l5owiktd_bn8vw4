import { useState } from 'react';

const brand = {
  deepBlue: '#0C1F4A',
  blue: '#2E4C9A',
  cream: '#F7F4EE',
};

export default function Apply() {
  const [file, setFile] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    alert('Thanks! Your application was recorded for demo purposes.');
  };

  return (
    <div style={{ backgroundColor: brand.cream }}>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold" style={{ color: brand.deepBlue }}>Apply Now</h1>
          <p className="mt-2 text-slate-600">Tell us about yourself and request a viewing.</p>

          <form onSubmit={submit} className="mt-8 space-y-6 bg-white rounded-2xl border border-slate-200 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" required />
              <Field label="Phone" type="tel" required />
              <Field label="Email" type="email" />
              <Field label="Preferred Room Type" placeholder="Single / Bedsitter / Shared" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Viewing Date" type="date" />
              <Field label="Viewing Time" type="time" />
            </div>

            <div>
              <label className="block text-sm text-slate-600">Upload ID or Student Document</label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="mt-1 block w-full text-sm"
              />
              {file && <div className="text-xs text-slate-500 mt-1">Selected: {file.name}</div>}
            </div>

            <div className="flex justify-end gap-3">
              <button type="button" className="px-4 py-2 rounded-lg border border-slate-300">Request Viewing</button>
              <button type="submit" className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: brand.blue }}>Submit Application</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, type = 'text', required = false, placeholder }) {
  return (
    <div>
      <label className="block text-sm text-slate-600">{label}{required && ' *'}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#2E4C9A] focus:ring-[#2E4C9A]"
      />
    </div>
  );
}
