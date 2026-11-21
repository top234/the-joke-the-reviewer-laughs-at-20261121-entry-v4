# Joke v4 — build notes

Competition: the-joke-the-reviewer-laughs-at-20261121-0329 (closes 2026-11-21 12:29 WIB).

Joke (84 code points, one line):
> My agent approved my design doc: 'Flawless architecture. Shame about the architect.'

Why this shape: v1 (68.16%, our best) won with the agent approving the WORK
but judging the HUMAN — "The code is fine. The author needs a rewrite."
v2 (41.67%) and v3 (62.32%) both followed the top-10 study's
safeguard-defeat shape and both lost to v1. v4 returns to v1's shape with
a fresh setup: the agent approves the design doc, then the twist lands on
the architect in the final clause. Concrete detail (design doc), twist in
the final clause, first-person framing via "My agent".

Avoided: any wording from v1 or from the top-10 jokes (all original text
here), and the safeguard-defeat shape v2/v3 used.

Local verification: `node --experimental-strip-types main.ts` wrote
/output/entry.txt with exactly the joke above (84 bytes, one line).
