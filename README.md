# react-form

Esercizi Boolean sui form in React: sei componenti, uno per punto della consegna.

## Stack

Vite + React + Tailwind CSS (`@tailwindcss/vite`) + icone [Lucide](https://lucide.dev).

## Esercizi

- **Newsletter**: dopo l'invio il form sparisce e al suo posto compare un messaggio di ringraziamento con l'email inserita.
- **Codice promozionale**: il codice viene cercato in un elenco (senza distinguere maiuscole e minuscole); se esiste mostra lo sconto, altrimenti segnala che non è valido. Codici di prova: `BOOLEAN10`, `REACT20`, `WELCOME5`.
- **Feedback**: voto da 1 a 5 con radio button e commento; dopo l'invio la risposta cambia in base al voto (1-2, 3, 4-5).
- **Preventivo**: ore × tariffa oraria calcolati mentre scrivi; oltre le 40 ore si aggiunge un extra fisso di 100 €.
- **Prenotazione tavolo**: nome, numero di ospiti e data; dopo l'invio una scheda riepiloga i dati.
- **Rubrica telefonica**: aggiunta di nome e numero e cancellazione di ogni contatto.

## Sviluppo

```bash
npm install
npm run dev
```
