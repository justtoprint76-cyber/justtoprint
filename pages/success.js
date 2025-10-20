export default function Success() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center text-white bg-black">
      <div>
        <h1 className="text-4xl font-bold text-yellow-500">Ordine completato</h1>
        <p className="mt-3 text-neutral-300">
          Grazie per il tuo acquisto! Ti abbiamo inviato un’email con i dettagli.
        </p>
        <a href="/" className="mt-6 inline-block text-yellow-400 underline hover:text-yellow-300">
          Torna allo shop
        </a>
      </div>
    </main>
  );
}
