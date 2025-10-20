// pages/success.js
export default function Success() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center text-white">
      <div>
        <h1 className="text-3xl font-bold">Ordine ricevuto ✅</h1>
        <p className="mt-3 text-neutral-300">
          Pagamento completato. Ti abbiamo inviato una conferma via email.
        </p>
        <a href="/" className="mt-6 inline-block underline">Torna allo shop</a>
      </div>
    </main>
  );
}
