# Kolo — Community savings, built for Stellar

> A familiar way for communities to save together, with a path to transparent digital settlement on Stellar.

**Kolo** is a WhatsApp-first community savings product inspired by Ajo, Esusu, and other rotating savings circles. It is being built for the way groups already organize: agree on a contribution, keep each other accountable, and take turns receiving the pooled savings.

The web app is the visual home for that experience. The product direction connects the conversational interface to Stellar accounts and assets, with Soroban contracts designed to make group rules visible and consistent. This repository contains the Next.js frontend; the backend and contracts live in their own repositories.

**Status:** early development. The public landing page is live at [kolo-frontend.vercel.app](https://kolo-frontend.vercel.app). Member dashboards, authentication, balances, and transaction views are prototypes and do not represent live financial activity.

## The Kolo idea

In a savings circle, trust is built through clear agreements and shared follow-through. Kolo aims to make those agreements easier to create and easier to track, while using Stellar as the digital settlement network underneath the experience.

```text
People coordinate in WhatsApp
            ↓
Kolo organizes members, schedules, and group activity
            ↓
Stellar provides accounts, assets, and transaction settlement
            ↓
Soroban contracts can enforce group-specific contribution and payout rules
```

The intended asset for savings flows is USDC on Stellar. The codebase is still aligning asset denomination and amount handling: some existing backend payment and command flows use native XLM, while the Soroban contract accepts a configured token contract. That gap must be resolved before real savings flows are enabled.

## What Stellar does in the product

- **Settlement:** Stellar is the planned network for member payments and group contributions or payouts. Rather than treating the blockchain as a marketing add-on, Kolo's product model places asset movement and verifiable transaction outcomes on the settlement layer.
- **Soroban group rules:** The companion Rust contract models rotational and goal-based groups. It includes member authorization, contribution checks, payout order, pause controls, and contract events. The backend is responsible for coordinating real-world group state with contract calls.
- **Clear transaction states:** A submitted transaction is not a completed payment. Kolo's backend integration is designed to simulate and submit Soroban transactions, poll for network confirmation, and reconcile on-chain contribution state with its database.
- **WhatsApp-first access:** Stellar works beneath the experience. Members should be able to participate through familiar conversational flows without needing to understand the underlying network mechanics.

The contract code has a [Testnet deployment](https://stellar.expert/explorer/testnet/contract/CBQCB6KIXAPDPKGNZFR3KSBBJNEJRFN3MAQL7S46JGFA5I22AUL4OPYL), but no savings group is initialized and the complete product flow is not deployed. See the [backend integration status](https://github.com/Stellar-Kolo/kolo-backend#current-status-and-limitations) and [contract integration notes](https://github.com/Stellar-Kolo/kolo-contracts#integration-with-kolo) for current limitations.

## Repositories

| Project                                                          | Responsibility                                                                    |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [kolo-frontend](https://github.com/Stellar-Kolo/kolo-frontend)   | Landing page and web experience for members and administrators                    |
| [kolo-backend](https://github.com/Stellar-Kolo/kolo-backend)     | WhatsApp workflows, application data, Stellar services, and Soroban orchestration |
| [kolo-contracts](https://github.com/Stellar-Kolo/kolo-contracts) | Rust Soroban savings-group contract and contract tests                            |

## What is in this repository

- A responsive public landing page introducing Kolo and its Stellar-based product direction.
- Early member and administrator dashboard screens for groups, activity, and payments.
- Next.js route handlers and service modules that define integration seams with the backend.
- Shared TypeScript types, UI components, and client-side state for the web experience.

Several dashboard views use sample data. Login and registration are demo flows, browser group actions include local-storage prototypes, and wallet or transaction API routes are placeholders. Do not use the dashboard as evidence of a live wallet, balance, payment, or authenticated financial action.

## Built with

- [Next.js](https://nextjs.org/) App Router and React
- TypeScript and Tailwind CSS
- Vitest and Testing Library
- Stellar and Soroban integration through the separate backend and contract projects

## Run locally

Requires Node.js and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Project map

- `src/app/` — Next.js pages and API route handlers.
- `src/components/` — landing, authentication, dashboard, groups, payments, and admin UI.
- `src/hooks/` and `src/context/` — client-side state and data access seams.
- `src/services/` — API, Stellar, Soroban, and WhatsApp integration modules.
- `src/lib/auth/` — demo session helpers and server-side route guards.
- `src/types/` — shared application data shapes.

## Contributing

For a larger change, open an issue describing the user need and the part of the product it affects. For Stellar-facing work, include the network interaction, who authorizes it, how confirmation is checked, and what users see when it is pending or fails. Never put secret keys, seed phrases, or credentials in browser code or Git.

See [`AGENTS.md`](AGENTS.md) for repository-specific guidance. This project uses Next.js 16; read the installed framework documentation in `node_modules/next/dist/docs/` before changing application code.
