import { useState } from 'react';

const HOURS_THRESHOLD = 40;
const EXTRA = 100;

const euro = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' });

export default function Quote() {
  const [hours, setHours] = useState('');
  const [rate, setRate] = useState('');

  const subtotal = Number(hours) * Number(rate);
  const hasExtra = Number(hours) > HOURS_THRESHOLD;
  const total = hasExtra ? subtotal + EXTRA : subtotal;

  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm text-slate-700">
          Ore di lavoro
          <input
            type="number"
            min="0"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-slate-700">
          Tariffa oraria (€)
          <input
            type="number"
            min="0"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2"
          />
        </label>
      </div>
      <dl aria-live="polite" className="flex flex-col gap-1 text-slate-700">
        <div className="flex justify-between"><dt>Subtotale</dt><dd>{euro.format(subtotal)}</dd></div>
        {hasExtra && (
          <div className="flex justify-between text-amber-700">
            <dt>Extra oltre {HOURS_THRESHOLD} ore</dt><dd>{euro.format(EXTRA)}</dd>
          </div>
        )}
        <div className="flex justify-between border-t border-slate-200 pt-1 font-semibold text-slate-900">
          <dt>Totale</dt><dd>{euro.format(total)}</dd>
        </div>
      </dl>
    </div>
  );
}
