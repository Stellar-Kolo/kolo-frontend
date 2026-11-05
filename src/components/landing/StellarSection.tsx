const layers = [
  {
    number: "01",
    name: "WhatsApp",
    role: "Where the group coordinates",
    color: "bg-[#b7ed79] text-[#203617]",
  },
  {
    number: "02",
    name: "Kolo backend",
    role: "Membership, schedules, and messages",
    color: "bg-[#8faef2] text-[#14274c]",
  },
  {
    number: "03",
    name: "Stellar",
    role: "Wallets, assets, and settlement",
    color: "bg-[#cad8ff] text-[#25396b]",
  },
  {
    number: "04",
    name: "Soroban",
    role: "On-chain group rules and state",
    color: "bg-[#d9c9ff] text-[#422f70]",
  },
];

const implementationStatus = [
  {
    label: "Soroban rules",
    value: "Rotational + GoalBased",
    detail:
      "Membership, contribution checks, payout order, and withdrawals are represented in the contract.",
  },
  {
    label: "Amount safety",
    value: "Exact stroop conversion",
    detail:
      "Backend amounts are converted with integer arithmetic before contract calls.",
  },
  {
    label: "Settlement state",
    value: "Confirmed + reconciled",
    detail:
      "Submitted transactions remain pending until confirmation and database reconciliation.",
  },
];

export default function StellarSection() {
  return (
    <section
      id="stellar"
      className="relative overflow-hidden bg-[#101a2c] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#4775d1]/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-3.5 py-2 text-xs font-semibold uppercase tracking-[.17em] text-[#b7c9ec]">
            <span className="h-2 w-2 rounded-full bg-[#b7ed79]" /> Designed for
            Stellar
          </p>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A clear role for every layer.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#c0cad9]">
            Stellar is more than a badge on the page. It is the planned
            settlement network for Kolo’s digital savings. Soroban gives group
            agreements a place to live on-chain; WhatsApp keeps the experience
            close to the community.
          </p>
          <a
            href="https://github.com/Stellar-Kolo/kolo-contracts"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#c8f39b] transition hover:text-white"
          >
            Explore the Soroban contracts <span aria-hidden="true">↗</span>
          </a>
          <p className="mt-4 max-w-lg text-xs leading-5 text-[#9aa9bf]">
            Kolo is in development. Production asset, custody, and contract
            deployment decisions are not yet finalized.
          </p>
        </div>

        <div className="relative rounded-[2rem] border border-white/10 bg-white/[.04] p-4 sm:p-6">
          <div
            className="absolute left-[2.15rem] top-12 bottom-12 w-px bg-gradient-to-b from-[#b7ed79] via-[#8faef2] to-[#d9c9ff] opacity-60 sm:left-[2.9rem]"
            aria-hidden="true"
          />
          <div className="space-y-3">
            {layers.map(({ number, name, role, color }) => (
              <div
                key={name}
                className="relative flex items-center gap-4 rounded-2xl border border-white/[.08] bg-[#17243a] p-4 sm:gap-5 sm:p-5"
              >
                <span
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${color}`}
                >
                  {number}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                      {name}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#9fadc2]">
                      {number === "03" || number === "04"
                        ? "Stellar ecosystem"
                        : "Kolo product"}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#b5c0d1] sm:text-sm">
                    {role}
                  </p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-[#8293ad]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#b7ed79] px-5 py-4 text-[#203617]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.16em] opacity-70">
                The goal
              </p>
              <p className="mt-1 font-display text-sm font-semibold sm:text-base">
                Community rules, visible settlement
              </p>
            </div>
            <span className="text-xl" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-[#0c1423] p-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#9fadc2]">
                  Implementation status
                </p>
                <p className="mt-1 font-display text-base font-semibold text-white">
                  Building the path from group agreement to verified settlement
                </p>
              </div>
              <span className="rounded-full border border-[#b7ed79]/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.14em] text-[#b7ed79]">
                Testnet-first
              </span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {implementationStatus.map(({ label, value, detail }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/[.08] bg-white/[.04] p-3"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#8293ad]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#dce7fb]">
                    {value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#9aa9bf]">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#9aa9bf]">
              The web companion is still a prototype. Use the repositories below
              to inspect the implementation and Testnet-only development status.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
