// pages/cancel.js
export default function Cancel() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center text-white">
      <div>
        <h1 className="text-3xl font-bold">Checkout annullato</h1>
        <p className="mt-3 text-neutral-300">
          Il pagamento è stato annullato. Puoi riprovare quando vuoi.
        </p>
        <a href="/" className="mt-6 inline-block underline">Torna allo shop</a>
      </div>
    </main>
  );
}
