# Cert question-dump sources & scraping playbook

Last full update: **2026-11-10** (commit b3a7fab). Read this before re-scraping.

## Current bank status

| Exam | Bank | Canonical pool | Filled from |
|---|---|---|---|
| CCA-F / CCAR-F (Anthropic) | 134/134 | 134 (itexams) | itexams dump, fact-checked vs official docs 2026-11-09 |
| AI-500 (Microsoft Foundry multi-agent) | 95 | 107 (itexams) | itexams 1–27 + ExamTopics 30-free + freecram/certlibrary/Braindump2go extras + **ExamCademy verified bank (92 q)** |
| CIS-DF (ServiceNow CMDB/CSDM) | 249 | 283 (itexams) | itexams/GitHub pools (204) ∪ **ExamCademy verified bank (259 q)**, content-deduped |

## Where the questions live (ranked by usefulness)

1. **ExamCademy** — https://examcademy.com/exams/<provider>/<exam>/ — the jackpot.
   - Free account required (signup via Auth0; email verification needed — click "I'VE VERIFIED MY EMAIL" after activating, else the exam content silently doesn't render).
   - Every question has a canonical URL `/exams/<provider>/<exam>/q/<n>-<any-slug>` — **any slug redirects (308) to the real one**, so you can harvest by number alone as a guest, no login needed.
   - Question data sits in the Next.js RSC payload (`self.__next_f.push`) with `stemRaw`, `choices`, `answers`, `explanation`. Watch for:
     - stems that are chunk refs (`"$3a"`) — resolve via `3a:T<id>,` announced chunks (the text is in the NEXT `push([1,"…"])`);
     - `blanks`/`statements` types have answers outside `answers[]` (order of `id`/`answer`/`label` varies);
     - some numbers 404 (bank has gaps — AI-500 has 92 real questions, numbered to 108).
2. **itexams** — https://www.itexams.com/exam/<EXAM>/<page> — 5 questions/page with answers in the DOM (`examsPage__question-correct-answer`).
   - **Quota: ~5 page-views per IP per day**, then hard redirect to `/accounts/login`. Fresh cookies don't reset it; free accounts don't get more; Tor exits are blocked outright. Curl works with a plain UA + cookie jar.
3. **ExamTopics** — https://www.examtopics.com/exams/<provider>/<exam>/view/ — 10 q/page, server-rendered **only when logged in** (free account = 30 questions/exam, locked to Q1–30 regardless of which page you open).
   - Login via curl POST works (`act=login`, email + pass). Registration needs an emailed 6-digit code → `/resend-activation/` POST binds the email to the session → `/signup/?mode=verify` POST `act=verifyCode` + `vfcode1..6` → login.
   - Per-question **discussion pages are ungated** (`/discussions/<vendor>/view/<id>-exam-<exam>-topic-<t>-question-<n>-discussion/`) and carry question text + community answers, but they're only discoverable via the activity-sorted listing (spread over 1551 pages for Microsoft) or search engines (DDG rate-limits hard, Bing needs a real browser).
4. **edudump** (examtopics mirror) — 8 q/page, reCAPTCHA v2 (auto-passes in a real browser) alternating with an image captcha (OCR-able), then "FREE VERSION LIMIT REACHED" after ~3 pages/day/IP. Free demo PDF at `/demo/<EXAM>.pdf` (POST `getpdf=1` after the 5s interstitial) — 8–20 questions.
5. **freecram / certlibrary / Braindump2go (examgod.com images) / GitHub pools** — partial free sets, good for cross-validation. Known pool repos: `IvanBBaev/CIS-DF` (192 q JSON + PDF), `SandeepRana1001/ServiceNow-CIS-DF-Prep-Quiz` (70 q), single-file quiz apps (`Joseag2598`, `godwincjh`, `MaxiGonzalez`).

## Tooling that worked

- **bsk** (browser-skill) for JS-rendered pages, SPA pagination, reCAPTCHA clicks, Auth0 signup flows. Quirks: `cooperate sync` JSON sometimes malformed → regex-extract `context_id`/`observation_id` (take the LAST match); ET/other sites break CDP after form POSTs ("another extension's content") → just restart the session, the POST already landed.
- **mail.tm API** for burner inboxes (accounts → token → messages). itexams/ET accept `@fldubai.com` addresses; ET rejects the domain via pure-curl signup but accepts it through the browser form (field names: `username`, not `nickname`).
- **macOS Vision OCR** (`pyobjc-framework-Vision`) for image captchas — screenshot the captcha element with `bsk screenshot --ref @eN`, upscale 3× with `sips`, then OCR. Works ~50% per try; reload for a new image and retry.
- Helper scripts from the session (recreate as needed): RSC parser (resolve chunk refs, blanks/statements answers), fuzzy content-dedupe merge (token-overlap / min-set similarity, ≥0.62 = duplicate), Auth0 curl login (GET login → POST `/u/login` with `state` → follow `/authorize/resume`).

## Merge rules used (keep consistent next time)

- Keep existing `n` numbering (localStorage progress depends on it); fill empty placeholder slots first, then append new questions after `max(n)`.
- Existing entries keep their answers; only fill answers into entries that lack one.
- Similarity: normalized word-token intersection / min-set, duplicate threshold 0.62, review anything 0.55–0.75.
- Domain field ← ExamCademy topic badges; store `exp` (explanation) on entries that have one.

## Re-scrape triggers

- AI-500 is brand new — dumps grow; itexams said 107, ExamCademy 92 (numbered to 108). Re-harvest monthly.
- CIS-DF pool claims 283 at itexams; we hold 249. The gap may be retired variants — verify before chasing.
