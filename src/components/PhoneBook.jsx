import { useState } from 'react';
import { Trash2 } from 'lucide-react';

const emptyContact = { name: '', phone: '' };

export default function PhoneBook() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState(emptyContact);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setContacts([...contacts, { id: crypto.randomUUID(), ...formData }]);
    setFormData(emptyContact);
  }

  function deleteContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-end">
        <label className="flex flex-1 flex-col gap-1 text-sm text-slate-700">
          Nome
          <input name="name" required value={formData.name} onChange={handleChange} className="rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <label className="flex flex-1 flex-col gap-1 text-sm text-slate-700">
          Telefono
          <input name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <button className="rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700">
          Aggiungi
        </button>
      </form>
      {contacts.length === 0 ? (
        <p className="text-slate-500">Rubrica vuota.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-slate-200">
          {contacts.map((contact) => (
            <li key={contact.id} className="flex items-center justify-between py-2">
              <span>
                <span className="font-medium text-slate-900">{contact.name}</span>{' '}
                <span className="text-slate-600">{contact.phone}</span>
              </span>
              <button
                onClick={() => deleteContact(contact.id)}
                aria-label={`Elimina ${contact.name}`}
                className="rounded-md p-2 text-slate-500 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
