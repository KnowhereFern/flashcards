#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
PORT="${PORT:-$(( 8000 + RANDOM % 1000 ))}"
python3 -m http.server "$PORT" --bind 127.0.0.1 >/tmp/cert-flashcards-test.log 2>&1 &
SERVER_PID=$!
PROFILE="$(mktemp -d)"
cleanup(){
  kill "$SERVER_PID" 2>/dev/null || true
  wait "$SERVER_PID" 2>/dev/null || true
  rm -rf "$PROFILE"
}
trap cleanup EXIT
sleep 1

CHROME_BIN="${CHROME_BIN:-}"
if [ -z "$CHROME_BIN" ]; then
  for candidate in \
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    "$(command -v google-chrome || true)" \
    "$(command -v chromium || true)" \
    "$(command -v chromium-browser || true)"; do
    if [ -n "$candidate" ] && [ -x "$candidate" ]; then CHROME_BIN="$candidate"; break; fi
  done
fi
if [ -z "$CHROME_BIN" ]; then
  echo "Chrome not found; set CHROME_BIN to a Chrome/Chromium binary." >&2
  exit 2
fi

FAILED=0
for page in tests/leak-audit.html tests/import-audit.html; do
  PROFILE="$(mktemp -d)"
  OUT="$("$CHROME_BIN" --headless=new --disable-gpu --no-sandbox \
    --user-data-dir="$PROFILE" --virtual-time-budget=30000 --dump-dom \
    "http://127.0.0.1:$PORT/$page" 2>/dev/null)"
  echo "== $page"
  echo "$OUT" | grep -o '<title>[^<]*</title>' || true
  if echo "$OUT" | grep -q '"failures":\[\]'; then
    echo "PASS $page"
  else
    echo "FAIL $page" >&2
    FAILED=1
  fi
  rm -rf "$PROFILE"
done
exit "$FAILED"
