export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f8fc] px-4 pb-20 pt-36 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8 lg:pt-44">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57, 82, 130, .055) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 82, 130, .055) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 top-24 h-[34rem] w-[34rem] rounded-full bg-[#dce9ff] opacity-70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-10">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d7e1f4] bg-white/80 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#445a81] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#87c957]" />
            COMMUNITY SAVINGS, BUILT FOR STELLAR
          </div>
          <h1 className="font-display text-[3.2rem] font-semibold leading-[1.02] tracking-[-0.055em] text-[#101a2c] sm:text-6xl lg:text-[4.6rem]">
            Ajo, Esusu, Chama.
            <span className="mt-2 block text-[#4775d1]">
              Together on Stellar.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Kolo is building a WhatsApp-first way for savings circles to
            coordinate contributions and take turns—using Stellar for digital
            asset settlement and Soroban for group rules.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#101a2c] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-[#1d2b45]"
            >
              See how Kolo is designed <span aria-hidden="true">↓</span>
            </a>
            <a
              href="https://github.com/Stellar-Kolo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#101a2c] transition hover:border-slate-400 hover:bg-white"
            >
              Explore the code <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">
            Kolo is in active development. Wallet and savings screens are
            prototypes; no live savings service is offered here.
          </p>
        </div>

        <div
          className="relative mx-auto w-full max-w-[550px] lg:ml-auto"
          aria-label="Concept illustration of a Kolo savings group and Stellar ledger"
        >
          <div
            className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#e4ecff] via-white to-[#e8f5dd] blur-2xl"
            aria-hidden="true"
          />
          <div className="relative rounded-[2rem] border border-white bg-white/90 p-3 shadow-[0_32px_100px_-45px_rgba(22,47,92,.42)] sm:p-5">
            <div className="rounded-[1.45rem] bg-[#101a2c] p-5 text-white sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#adc1e7]">
                    Example circle
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    The Sunday Circle
                  </h2>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-[#d7e6ff]">
                  Concept UI
                </span>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[.06] p-4 sm:p-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#bdc9dc]">Cycle contributions</span>
                  <span className="font-medium text-white">4 of 6 members</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-[#b7ed79]" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {["Ada", "Tunde", "Mina", "Kofi", "You", "Next"].map(
                    (name, index) => (
                      <div
                        key={name}
                        className="flex items-center gap-2 rounded-xl bg-white/[.055] px-2 py-2.5 sm:px-3"
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${index < 4 ? "bg-[#dff4ce] text-[#365a26]" : "bg-white/10 text-[#b9c7dc]"}`}
                        >
                          {index < 4 ? "✓" : "·"}
                        </span>
                        <span className="truncate text-xs text-[#e1e8f3]">
                          {name}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl bg-[#4775d1] p-4 sm:p-5">
                <div>
                  <p className="text-xs font-medium text-blue-100">
                    Designed to settle on Stellar
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold">
                    Clear rules. Shared record.
                  </p>
                </div>
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="12" cy="12" r="8.4" />
                    <path d="M4 9h16M4 15h16M9 4.7l2 14.6m4-14.6-2 14.6" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="px-2 pb-1 pt-4 text-center text-[11px] text-slate-500">
              Illustrative product concept · not live account or blockchain data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
