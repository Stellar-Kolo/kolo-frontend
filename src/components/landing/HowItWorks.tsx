const steps = [
  {
    number: "01",
    title: "Agree as a circle",
    description:
      "Members choose the contribution amount, frequency, participants, and payout order together.",
    label: "The group sets the rules",
  },
  {
    number: "02",
    title: "Contribute digitally",
    description:
      "Kolo is designed to coordinate contributions through WhatsApp and settle supported assets through Stellar.",
    label: "Stellar moves the value",
  },
  {
    number: "03",
    title: "Follow the rotation",
    description:
      "Soroban contracts can represent the agreed rules and payout order, while the group tracks each cycle together.",
    label: "Soroban represents the rules",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#f6f8fc] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#4775d1]">
            From agreement to shared record
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[#101a2c] sm:text-5xl">
            A familiar circle. A clearer flow.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Kolo brings the coordination people know together with Stellar’s
            digital asset rails.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map(({ number, title, description, label }, index) => (
            <article
              key={number}
              className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-4xl font-semibold tracking-[-.06em] text-[#4775d1]">
                  {number}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className="hidden h-px flex-1 bg-gradient-to-r from-[#bed0f3] to-transparent md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold text-[#101a2c]">
                {title}
              </h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                {description}
              </p>
              <p className="mt-7 inline-flex rounded-full bg-[#eff4ff] px-3 py-1.5 text-[11px] font-semibold text-[#496ba9]">
                {label}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          This describes the intended product flow; the full savings journey is
          still under development.
        </p>
      </div>
    </section>
  );
}
