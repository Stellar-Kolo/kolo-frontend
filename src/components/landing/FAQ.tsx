"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Kolo?",
    answer:
      "Kolo is a WhatsApp-first community savings product in development. It is designed for groups that pool regular contributions and rotate payouts, with a web companion for group and account information.",
  },
  {
    question: "Why is Kolo being built on Stellar?",
    answer:
      "Kolo plans to use Stellar as the network for digital asset transfers and settlement. The backend can read Stellar account and transaction data, while Soroban contracts are intended to represent the rules for savings groups.",
  },
  {
    question: "Is Soroban handling the savings rules today?",
    answer:
      "The repository contains Soroban contract code and the backend contains early integration work, but the full group lifecycle is not yet connected end to end. Contract deployment, member enrollment, asset units, and payout handling still need alignment.",
  },
  {
    question: "Can I use Kolo to save real funds now?",
    answer:
      "No. The public web app is a prototype and some screens use sample data. Kolo is not currently offering a live savings service. Do not send funds or share wallet secrets based on this demo.",
  },
  {
    question: "Who controls the wallet keys?",
    answer:
      "The current backend prototype creates platform-managed Stellar wallets and encrypts signing keys at rest. Those wallets are not self-custodial. Kolo must finalize and clearly explain its custody and recovery model before handling live funds.",
  },
  {
    question: "Which asset will Kolo use?",
    answer:
      "The product brief targets USDC on Stellar. Some current backend paths still use native XLM, so the asset and amount-unit handling must be made consistent before the savings flow is launched.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[#f6f8fc] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#4775d1]">
            Straight answers
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[#101a2c] sm:text-4xl">
            What we’re building—and what we’re not.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                onClick={() => setOpen(open === index ? null : index)}
                aria-expanded={open === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-display text-base font-semibold text-[#101a2c] sm:text-lg">
                  {question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f4f9] text-lg text-[#526b96] transition-transform ${open === index ? "rotate-45" : ""}`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {open === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-5 pb-5 sm:px-6 sm:pb-6"
                >
                  <p className="max-w-2xl text-sm leading-6 text-slate-600">
                    {answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
