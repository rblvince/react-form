import Section from './components/Section';
import Newsletter from './components/Newsletter';
import PromoCode from './components/PromoCode';
import Feedback from './components/Feedback';
import Quote from './components/Quote';
import TableBooking from './components/TableBooking';
import PhoneBook from './components/PhoneBook';

function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 bg-slate-50 px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-900">React Form</h1>
      <Section title="1. Iscrizione alla newsletter">
        <Newsletter />
      </Section>
      <Section title="2. Codice promozionale">
        <PromoCode />
      </Section>
      <Section title="3. Feedback">
        <Feedback />
      </Section>
      <Section title="4. Preventivo">
        <Quote />
      </Section>
      <Section title="5. Prenotazione tavolo">
        <TableBooking />
      </Section>
      <Section title="6. Rubrica telefonica">
        <PhoneBook />
      </Section>
    </main>
  );
}

export default App;
