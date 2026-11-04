const traditions = [
  {
    name: "Ajo",
    region: "Nigeria",
    note: "Members contribute on a shared schedule and take turns receiving the pot.",
  },
  {
    name: "Esusu",
    region: "West Africa",
    note: "A trusted group practice built on consistency, mutual support, and clear agreements.",
  },
  {
    name: "Chama",
    region: "East Africa",
    note: "People pool their contributions to make shared goals easier to reach.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="community"
      className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#4775d1]">
              Many names. One shared idea.
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-[#101a2c] sm:text-5xl">
              Saving together is already a technology.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Across communities, people have built ways to save through trust,
            routine, and shared responsibility. Kolo’s ambition is to support
            those practices with digital coordination and a transparent Stellar
            record.
          </p>
        </div>
        <div className="mt-11 grid gap-4 md:grid-cols-3">
          {traditions.map(({ name, region, note }, index) => (
            <article
              key={name}
              className={`rounded-3xl p-6 sm:p-7 ${index === 1 ? "bg-[#eef3ff]" : "bg-[#f6f8fc]"}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-3xl font-semibold tracking-tight text-[#101a2c]">
                  {name}
                </h3>
                <span className="rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.13em] text-slate-500">
                  {region}
                </span>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">{note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
