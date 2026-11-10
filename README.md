# Cert Flashcards

Flashcard study app for three certification exams, served via GitHub Pages:

| Exam | Vendor | Questions |
|---|---|---|
| **CCA-F / CCAR-F** — Claude Certified Architect: Foundations | Anthropic | 134 |
| **AI-500** — Designing & Implementing Multi-Agent AI Solutions | Microsoft | scraped from community dump |
| **CIS-DF** — Certified Implementation Specialist: Data Foundations (CMDB & CSDM) | ServiceNow | scraped from community dump |

**Study it here:** https://knowherefern.github.io/flashcards/ — on iPhone, open in Safari and use Share > Add to Home Screen for an app-like icon.

## Features

- **Flashcards** — click/space to flip; back shows all choices with correct one(s) highlighted; optional choices-on-front mode
- **Quiz** — toggle answers (supports multi-select "choose two/three"), Enter to reveal; wrong picks auto-flagged
- **Browse** — searchable list (questions and answer text) with click-to-reveal answers
- **Spaced review** — "Got it" schedules the card's next review at 1/3/7/14/30-day intervals; "Again" resets it. The "Due" filter shows only what's scheduled to be reviewed
- **Session resume** — exam, mode, position, and filters are restored on reload
- **Case-study panels** — AI-500 case-study scenarios are stored once and shown as an expandable panel per question
- **Visual questions** — drag-and-drop/hotspot items are flagged and show the answer image on reveal
- **Progress export/import** — move progress between devices (Mac and iPhone have separate localStorage)
- **Per-exam progress on the picker** — learned counts at a glance

## Data provenance

- **CCA-F**: 134-question community dump (itexams.com), fact-checked against official Anthropic/MCP docs on 2026-11-09 — no answer-key discrepancies found in the fact-sensitive subset. Exam is live as CCAR-F on Pearson VUE; the Dec 7 2026 content update does not affect it.
- **AI-500 / CIS-DF**: scraped from the public community dump on itexams.com (Nov 2026). Answer keys are community recalls — treat as calibration, not truth. AI-500 is a brand-new exam; expect the dump to evolve, re-scrape periodically.

## Adding / updating an exam

Each `data-*.js` registers into `window.EXAM_DATA['<id>'] = { exam:{code,title,subtitle}, contexts:[], questions:[{n,domain,ctx,q,choices:{A..},answer:'D'|'BC',visual?,answerHtml?}] }`. Update the array (or re-scrape) and push — Pages redeploys automatically.

## Disclaimer

Unofficial. Not endorsed by Anthropic, Microsoft, or ServiceNow. Community dumps may violate exam NDAs and contain wrong answers — for calibration only, at your own discretion.
