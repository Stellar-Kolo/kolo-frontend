const features = [
  {
    number: "01",
    title: "Keep the group close",
    description:
      "Kolo is designed around WhatsApp, where many savings circles already plan, remind, and keep each other accountable.",
    detail: "A familiar way to coordinate",
    icon: "chat",
  },
  {
    number: "02",
    title: "Move value on Stellar",
    description:
      "The product is being built to use Stellar assets for contributions and payouts, with a clear transaction trail members can verify.",
    detail: "Open network settlement",
    icon: "stellar",
  },
  {
    number: "03",
    title: "Make the rotation explicit",
    description:
      "Soroban contracts are intended to encode group membership, contribution rules, and the order members receive the pooled funds.",
    detail: "Rules represented on-chain",
    icon: "rules",
  },
];

function FeatureIcon({ kind }: { kind: string }) {
  if (kind === "chat") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-5.5A7.5 7.5 0 1 1 20 11.5Z" />
        <path d="M8 11h8M8 14.5h5" />
      </svg>
    );
  }
  if (kind === "stellar") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 7.5 20 4M4 12h12M4 20l16-3.5" />
        <path d="m7.5 6.7-3 1.4m15.1 7.2-3 1.4" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#4775d1]">
            The Kolo approach
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[#101a2c] sm:text-5xl">
            Community-led saving, with Stellar underneath.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Familiar group habits meet a shared digital ledger. Each layer has a
            clear job.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map(({ number, title, description, detail, icon }) => (
            <article
              key={number}
              className="group rounded-3xl border border-slate-200 bg-[#f8f9fc] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#cbd8f1] hover:bg-white hover:shadow-xl hover:shadow-slate-900/[.06] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#4775d1] shadow-sm ring-1 ring-slate-200/80">
                  <FeatureIcon kind={icon} />
                </span>
                <span className="font-display text-sm font-semibold tracking-wide text-slate-400">
                  {number}
                </span>
              </div>
              <h3 className="mt-9 font-display text-xl font-semibold tracking-tight text-[#101a2c]">
                {title}
              </h3>
              <p className="mt-3 min-h-[84px] text-sm leading-6 text-slate-600">
                {description}
              </p>
              <div className="mt-7 border-t border-slate-200 pt-4 text-xs font-semibold text-[#526b96]">
                {detail}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
