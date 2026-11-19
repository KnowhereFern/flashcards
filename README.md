# Cert Flashcards

Flashcard study app for four certification exams, served via GitHub Pages:

| Exam | Vendor | Questions |
|---|---|---|
| **CCA-F / CCAR-F** — Claude Certified Architect: Foundations | Anthropic | 134 |
| **AI-500** — Designing & Implementing Multi-Agent AI Solutions | Microsoft | 95 |
| **AI-103** — Developing AI Apps and Agents on Azure | Microsoft | 182 |
| **CIS-DF** — Certified Implementation Specialist: Data Foundations (CMDB & CSDM) | ServiceNow | 249 |

**Study it here:** https://knowherefern.github.io/flashcards/ — on iPhone, open in Safari and use Share > Add to Home Screen. It installs as an app with its own icon, runs offline, and resumes where you left off.

## PWA

- **Installable** — web manifest + service worker (`sw.js`); Add to Home Screen on iOS gives a standalone app with the flashcards icon, no browser chrome
- **Offline** — app shell and icons are precached; question data is cached on first load and refreshed in the background (stale-while-revalidate); bump `VER` in `sw.js` when changing the shell
- **Offline question/answer images** — remote question and answer images have a long HTTP cache; they are warmed in the background when you open an exam on a non-slow connection and get an offline placeholder if they were never cached
- **Resume** — the last-open exam, position, shuffle order, and revealed card are saved to localStorage and restored on load (or after force-quitting/reinstalling… well, until iOS evicts storage — export/import is the backup)

## Features

- **Study mode** — question and choices are always visible; Show answer highlights the correct choice(s), multi-select keys included
- **Explanations** — when a bank has an explanation for a question, it appears under the answer with its source links
- **Answers-on mode** — keep answers visible while paging through a bank
- **Shuffle** — randomize the order; the shuffled order is persisted and restored on reload
- **Session resume** — exam, position, shuffle order, and the last revealed card are restored on load
- **Case-study panels** — case-study scenarios are stored once and shown as an expandable panel per question
- **Visual questions** — question images render inline; drag-and-drop/hotspot items show their answer image or text on reveal, with alt text and an offline/blocked-source fallback
- **Progress export/import** — move progress between devices (Mac and iPhone have separate localStorage); imports are validated and clamped
- **PWA** — installable shell, offline question data, and keyboard shortcuts (`space`, `←`, `→`)

## Data provenance

- **CCA-F**: 134-question community dump (itexams.com), fact-checked against official Anthropic/MCP docs on 2026-11-09 — no answer-key discrepancies found in the fact-sensitive subset. The original standalone exam page with per-question `verified`/`confidence` metadata is archived at `docs/cca-f.html`. Exam is live as CCAR-F on Pearson VUE; the Dec 7 2026 content update does not affect it.
- **AI-500 (95 questions)**: itexams/ExamTopics/freecram/certlibrary/Braindump2go multi-source scrape, merged 2026-11-10 with ExamCademy's verified 92-question bank (includes per-question explanations). Full itexams pool is 107; a few hotspot/drag-drop items are image-only.
- **AI-103 (182 questions)**: guest-harvested 2026-11-16 from ExamCademy per-question pages (`/exams/microsoft/ai-103/q/<n>-<slug>`, 308 redirects to canonical slug; data parsed from the Next.js RSC payload). 185 numbered slots → 182 questions captured (153/160/163 unavailable); formats: 122 multiple-choice, 35 dropdown, 15 drag-drop, 10 yes/no statement sets. 51 missing explanations were backfilled from the same RSC payload on 2026-11-19 (182/182 now have explanations); question images are rendered inline from their Markdown sources. ExamCademy questions are community-maintained/verified; not an official dump — for study/calibration only; cross-check against official Microsoft Learn/skills measured.
- **CIS-DF (249 questions)**: itexams/GitHub-pool scrape (204) merged 2026-11-10 with ExamCademy's verified 259-question bank; union deduped by content → 249 unique. itexams advertises a 283-question pool; remaining slots may be retired/duplicate variants.
- Answer keys are community recalls (ExamCademy keys are community-voted with explanations) — treat as calibration, not truth. AI-500 is a brand-new exam; expect the dump to evolve, re-scrape periodically.

## Adding / updating an exam

Each `data-*.js` registers into `window.EXAM_DATA['<id>'] = { exam:{code,title,subtitle}, contexts:[], questions:[{n,domain,ctx,q,choices:{A..},answer:'D'|'BC',visual?,answerHtml?}] }`. Update the array (or re-scrape), bump the asset query/`sw.js` `VER`, and push — Pages redeploys automatically.

## Tests

`bash tests/run.sh` runs the headless leak audit (requires Chrome or `CHROME_BIN`). It loads the real app in an iframe and checks every card: reveal/hide, forward/back navigation, answer text/image clearing, alt text, Answers mode, bad saved positions, and shuffle-order restore.

## Disclaimer

Unofficial. Not endorsed by Anthropic, Microsoft, or ServiceNow. Community dumps may violate exam NDAs and contain wrong answers — for calibration only, at your own discretion.
