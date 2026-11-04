"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#stellar", label: "Why Stellar" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Kolo home"
        >
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
          <span className="font-display text-xl font-bold tracking-tight text-[#101a2c]">
            Kolo
          </span>
          <span className="hidden rounded-full bg-[#edf3ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#4265b4] sm:inline-flex">
            On Stellar
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#101a2c]"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/Stellar-Kolo"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-xl bg-[#101a2c] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1d2b45] md:inline-flex"
        >
          Explore the project <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-[#101a2c] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            {open ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-slate-200 bg-white p-3 shadow-lg md:hidden">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/Stellar-Kolo"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block rounded-xl bg-[#101a2c] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Explore the project ↗
          </a>
        </div>
      )}
    </header>
  );
}
