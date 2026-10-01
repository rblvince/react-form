import { useState } from 'react';

const emptyBooking = { name: '', guests: 2, date: '' };

export default function TableBooking() {
  const [formData, setFormData] = useState(emptyBooking);
  const [booking, setBooking] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBooking(formData);
    setFormData(emptyBooking);
  }

  if (booking) {
    return (
      <div role="status" className="flex flex-col gap-3 rounded-md border border-green-200 bg-green-50 p-4">
        <h3 className="font-semibold text-green-900">Prenotazione confermata</h3>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-slate-700">
          <dt className="text-slate-500">Nome</dt><dd>{booking.name}</dd>
          <dt className="text-slate-500">Ospiti</dt><dd>{booking.guests}</dd>
          <dt className="text-slate-500">Data</dt>
          <dd>{new Date(`${booking.date}T00:00`).toLocaleDateString('it-IT', { dateStyle: 'full' })}</dd>
        </dl>
        <button
          onClick={() => setBooking(null)}
          className="self-start text-sm font-medium text-green-800 underline"
        >
          Nuova prenotazione
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-3">
      <label className="flex flex-col gap-1 text-sm text-slate-700">
        Nome
        <input name="name" required value={formData.name} onChange={handleChange} className="rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <label className="flex flex-col gap-1 text-sm text-slate-700">
        N. ospiti
        <input name="guests" type="number" min="1" max="20" required value={formData.guests} onChange={handleChange} className="rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <label className="flex flex-col gap-1 text-sm text-slate-700">
        Data
        <input name="date" type="date" required value={formData.date} onChange={handleChange} className="rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <button className="justify-self-start rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700 sm:col-span-3">
        Prenota
      </button>
    </form>
  );
}
