# Cert Flashcards

Flashcard study app for three certification exams, served via GitHub Pages:

| Exam | Vendor | Questions |
|---|---|---|
| **CCA-F / CCAR-F** — Claude Certified Architect: Foundations | Anthropic | 134 |
| **AI-500** — Designing & Implementing Multi-Agent AI Solutions | Microsoft | 95 |
| **CIS-DF** — Certified Implementation Specialist: Data Foundations (CMDB & CSDM) | ServiceNow | 249 |

**Study it here:** https://knowherefern.github.io/flashcards/ — on iPhone, open in Safari and use Share > Add to Home Screen. It installs as an app with its own icon, runs offline, and resumes where you left off.

## PWA

- **Installable** — web manifest + service worker (`sw.js`); Add to Home Screen on iOS gives a standalone app with the flashcards icon, no browser chrome
- **Offline** — app shell, icons, and question data are precached and refreshed in the background (stale-while-revalidate); bump `VER` in `sw.js` when changing the shell
- **Resume** — the last-open exam, position, shuffle state, and revealed card are saved to localStorage and restored on load (or after force-quitting/reinstalling… well, until iOS evicts storage — export/import is the backup)

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

- **CCA-F**: 134-question community dump (itexams.com), fact-checked against official Anthropic/MCP docs on 2026-11-09 — no answer-key discrepancies found in the fact-sensitive subset. The original standalone exam page with per-question `verified`/`confidence` metadata is archived at `docs/cca-f.html`. Exam is live as CCAR-F on Pearson VUE; the Dec 7 2026 content update does not affect it.
- **AI-500 (95 questions)**: itexams/ExamTopics/freecram/certlibrary/Braindump2go multi-source scrape, merged 2026-11-10 with ExamCademy's verified 92-question bank (includes per-question explanations). Full itexams pool is 107; a few hotspot/drag-drop items are image-only.
- **CIS-DF (249 questions)**: itexams/GitHub-pool scrape (204) merged 2026-11-10 with ExamCademy's verified 259-question bank; union deduped by content → 249 unique. itexams advertises a 283-question pool; remaining slots may be retired/duplicate variants.
- Answer keys are community recalls (ExamCademy keys are community-voted with explanations) — treat as calibration, not truth. AI-500 is a brand-new exam; expect the dump to evolve, re-scrape periodically.

## Adding / updating an exam

Each `data-*.js` registers into `window.EXAM_DATA['<id>'] = { exam:{code,title,subtitle}, contexts:[], questions:[{n,domain,ctx,q,choices:{A..},answer:'D'|'BC',visual?,answerHtml?}] }`. Update the array (or re-scrape) and push — Pages redeploys automatically.

## Disclaimer

Unofficial. Not endorsed by Anthropic, Microsoft, or ServiceNow. Community dumps may violate exam NDAs and contain wrong answers — for calibration only, at your own discretion.
