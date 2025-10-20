export default function Cancel() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center text-white bg-black">
      <div>
        <h1 className="text-4xl font-bold text-red-500">Ordine annullato</h1>
        <p className="mt-3 text-neutral-300">
          Il pagamento non è stato completato. Puoi riprovare quando vuoi.
        </p>
        <a href="/" className="mt-6 inline-block text-yellow-400 underline hover:text-yellow-300">
          Torna allo shop
        </a>
      </div>
    </main>
  );
}

