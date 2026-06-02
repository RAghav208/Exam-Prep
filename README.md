# Exam Prep Hub — MCA (AIML)

A fast, distraction-free exam-preparation website covering multiple subjects, built to match the official JAIN University MCA-AIML syllabus. Module-wise notes, comparison tables, step-by-step worked solutions, and — most importantly — a **Predicted** section built from previous-year question papers and internal-assessment (IA) tests.

## Subjects

| Code | Subject | What's inside |
|------|---------|---------------|
| **25MCAC201** | Object Oriented Programming Using Java | 5 modules · 18 topics · predicted programs + questions |
| **25MCAC203** | Machine Learning | 5 modules · 18 topics · predicted solved problems + questions |
| **25MCAAIE2041** | Advanced Probability and Statistics | 5 modules · 16 topics · predicted **step-by-step numericals** + questions |

## Features

- **Module-wise notes** in simple English — definition → key points → tables → worked examples → frequently asked exam questions.
- **Predicted section** — questions and problems drawn from previous-year papers, tagged with mark weight and likelihood, grouped by module.
- **Step-by-step maths solutions** — every numerical is laid out as `APPROACH → numbered steps → formula → final answer`, so you can follow exactly how it's solved (built for the probability & statistics paper).
- **Syntax-highlighted code** (Java / Python) with copy-to-clipboard blocks; clean tables and collapsible detailed notes.
- **Subject switcher**, in-subject search, and a keyboard-friendly, mobile-responsive layout.
- "Exam-Focused Minimal" design — light theme, single accent, zero clutter.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- React 19 · TypeScript · Tailwind CSS v4
- No backend — fully static, hostable on any static host.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Produces a fully static site in `out/`.

## Deployment (GitHub Pages)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the static site and deploys it to GitHub Pages on every push to `master`/`main`.

To enable it: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.

The workflow automatically sets the correct base path from the repository name, so the project site works at `https://<username>.github.io/<repo>/`.
