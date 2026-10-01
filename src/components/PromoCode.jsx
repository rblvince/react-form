import { useState } from 'react';

const promoCodes = { BOOLEAN10: 10, REACT20: 20, WELCOME5: 5 };

export default function PromoCode() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const discount = promoCodes[code.trim().toUpperCase()];
    setResult(discount ? { valid: true, discount } : { valid: false });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
        <label className="flex flex-1 flex-col gap-1 text-sm text-slate-700">
          Codice promozionale
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="es. BOOLEAN10"
            className="rounded-md border border-slate-300 px-3 py-2 uppercase"
          />
        </label>
        <button className="rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700">
          Applica
        </button>
      </div>
      <p aria-live="polite" className={result?.valid ? 'text-green-700' : 'text-red-600'}>
        {result && (result.valid ? `Codice valido: sconto del ${result.discount}% applicato.` : 'Codice non valido.')}
      </p>
      <p className="text-xs text-slate-500">Codici di prova: {Object.keys(promoCodes).join(', ')}</p>
    </form>
  );
}
