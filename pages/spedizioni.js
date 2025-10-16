export default function Spedizioni() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Spedizioni & Resi</h1>

        <div className="mt-6 space-y-6 text-sm leading-6 text-neutral-800">
          <div>
            <h2 className="font-semibold text-neutral-900">Spedizione in Italia 🇮🇹</h2>
            <p className="mt-2">
              JUSTTOPRINT spedisce in tutta Italia tramite corrieri espressi affidabili (BRT, GLS o SDA).
              Gli ordini vengono elaborati e preparati entro <strong>1–2 giorni lavorativi</strong> dal pagamento.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li><strong>Tempi di consegna:</strong> 2–5 giorni lavorativi</li>
              <li><strong>Costo spedizione:</strong> €6,90</li>
              <li><strong>Spedizione gratuita:</strong> sopra €79</li>
              <li>Tutte le spedizioni sono <strong>tracciate</strong> (riceverai il link via email).</li>
            </ul>
            <p className="mt-2 text-neutral-600 text-xs">
              Nota: in alcuni periodi o per zone remote (isole, località montane), la consegna potrebbe richiedere 1–2 giorni in più.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-neutral-900">Preparazione e consegna</h2>
            <p className="mt-2">
              I prodotti vengono imballati con cura nel nostro laboratorio e consegnati al corriere.
              Riceverai un’email con il numero di tracking per seguire il pacco in tempo reale.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-neutral-900">Resi e rimborsi</h2>
            <p className="mt-2">
              Hai <strong>14 giorni</strong> di tempo dalla consegna per richiedere un reso.
              Il prodotto deve essere non utilizzato, non lavato e nella confezione originale.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>I costi di spedizione del reso sono a carico del cliente.</li>
              <li>In caso di errore o prodotto difettoso, il reso è <strong>gratuito</strong>.</li>
              <li>Rimborso sullo stesso metodo di pagamento entro <strong>7–10 giorni lavorativi</strong> dalla ricezione.</li>
            </ul>
            <p className="mt-2">
              Per assistenza o per avviare un reso:{" "}
              <a className="underline" href="mailto:justtoprint76@gmail.com">justtoprint76@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
