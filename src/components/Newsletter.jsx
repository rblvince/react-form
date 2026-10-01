import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubscribed(true);
  }

  if (subscribed) {
    return (
      <p role="status" className="rounded-md bg-green-50 px-4 py-3 text-green-800">
        Grazie per esserti iscritto! Riceverai la prossima newsletter su <strong>{email}</strong>.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-end">
      <label className="flex flex-1 flex-col gap-1 text-sm text-slate-700">
        Email
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nome@esempio.it"
          className="rounded-md border border-slate-300 px-3 py-2"
        />
      </label>
      <button className="rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700">
        Iscriviti
      </button>
    </form>
  );
}
