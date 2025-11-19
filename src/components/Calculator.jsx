import { useMemo, useState } from 'react';

const brand = {
  deepBlue: '#0C1F4A',
  blue: '#2E4C9A',
  cream: '#F7F4EE',
  grey: '#A3A3A3',
};

export default function Calculator() {
  const [type, setType] = useState('single');
  const [months, setMonths] = useState(12);

  const base = {
    single: 8000,
    bedsitter: 12000,
    shared: 6000,
  };

  const total = useMemo(() => {
    const deposit = base[type] * 1; // one-month deposit
    const rent = base[type] * months;
    return { rent, deposit, total: rent + deposit };
  }, [type, months]);

  return (
    <section className="py-16" style={{ backgroundColor: brand.cream }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold" style={{ color: brand.deepBlue }}>Quick Rent Calculator</h2>
            <p className="mt-2 text-slate-600">Estimate your rent and deposit in seconds.</p>

            <div className="mt-6 space-y-4 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div>
                <label className="text-sm text-slate-600">Room Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#2E4C9A] focus:ring-[#2E4C9A]"
                >
                  <option value="single">Single</option>
                  <option value="bedsitter">Bedsitter</option>
                  <option value="shared">Shared Room</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-600">Months</label>
                <input
                  type="number"
                  min={1}
                  max={24}
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#2E4C9A] focus:ring-[#2E4C9A]"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="text-xs text-slate-500">Monthly</div>
                  <div className="text-lg font-semibold text-slate-800">KES {base[type].toLocaleString()}</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="text-xs text-slate-500">Deposit</div>
                  <div className="text-lg font-semibold text-slate-800">KES {total.deposit.toLocaleString()}</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="text-xs text-slate-500">Total</div>
                  <div className="text-lg font-semibold text-slate-800">KES {total.total.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium" style={{ color: brand.deepBlue }}>Why Students Choose Nanga Courts</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-700">
              <li className="bg-white p-4 rounded-lg border border-slate-200">Fast WiFi</li>
              <li className="bg-white p-4 rounded-lg border border-slate-200">24/7 Security</li>
              <li className="bg-white p-4 rounded-lg border border-slate-200">Reliable Water</li>
              <li className="bg-white p-4 rounded-lg border border-slate-200">Study-Friendly</li>
              <li className="bg-white p-4 rounded-lg border border-slate-200">Close to Campus</li>
              <li className="bg-white p-4 rounded-lg border border-slate-200">On-site Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
