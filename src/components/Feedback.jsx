import { useState } from 'react';

const scores = [1, 2, 3, 4, 5];

function getReply(score) {
  if (score <= 2) return 'Ci dispiace! Useremo il tuo commento per migliorare.';
  if (score === 3) return 'Grazie! Ci impegneremo per fare ancora meglio.';
  return 'Fantastico, grazie! Siamo felici che ti sia piaciuto.';
}

export default function Feedback() {
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="flex flex-col gap-1 rounded-md bg-slate-100 px-4 py-3">
        <p className="font-medium text-slate-900">{getReply(score)}</p>
        <p className="text-sm text-slate-600">Voto: {score}/5{comment && ` · "${comment}"`}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-1 text-sm text-slate-700">Voto</legend>
        <div className="flex gap-4">
          {scores.map((value) => (
            <label key={value} className="flex items-center gap-1">
              <input
                type="radio"
                name="score"
                value={value}
                required
                checked={score === value}
                onChange={(e) => setScore(Number(e.target.value))}
              />
              {value}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="flex flex-col gap-1 text-sm text-slate-700">
        Commento
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          className="rounded-md border border-slate-300 px-3 py-2"
        />
      </label>
      <button className="self-start rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700">
        Invia feedback
      </button>
    </form>
  );
}
