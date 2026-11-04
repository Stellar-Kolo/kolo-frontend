import Link from "next/link";

const repos = [
  { name: "Web app", href: "https://github.com/Stellar-Kolo/kolo-frontend" },
  {
    name: "WhatsApp backend",
    href: "https://github.com/Stellar-Kolo/kolo-backend",
  },
  {
    name: "Soroban contracts",
    href: "https://github.com/Stellar-Kolo/kolo-contracts",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f6f8fc] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#101a2c] text-[#b7ed79]">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  stroke="currentColor"
                  strokeWidth="2.3"
                />
                <path
                  d="M12 7.5v9M7.5 12h9"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="font-display text-xl font-bold text-[#101a2c]">
              Kolo
            </span>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Community savings, designed for WhatsApp and being built on Stellar.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            In active development · Not a live savings service
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {repos.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-600 transition hover:text-[#101a2c"
            >
              {name} ↗
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 pt-5 text-xs text-slate-500">
        © {new Date().getFullYear()} Kolo · Built with the Stellar ecosystem in
        mind.
      </div>
    </footer>
  );
}
