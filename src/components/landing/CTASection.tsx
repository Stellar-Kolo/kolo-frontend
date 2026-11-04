export default function CTASection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#101a2c] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#b7ed79]">
          Building in the open
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Community savings deserves clear rules and open rails.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#c0cad9] sm:text-base sm:leading-7">
          Kolo is being built in public across its web app, WhatsApp backend,
          and Soroban contracts. Explore the code and follow the work as the
          Stellar integration takes shape.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://github.com/Stellar-Kolo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b7ed79] px-6 py-3.5 text-sm font-bold text-[#203617] transition hover:bg-[#c8f39b]"
          >
            Explore Kolo on GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/Stellar-Kolo/kolo-contracts"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[.05] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Read the Soroban contract <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
