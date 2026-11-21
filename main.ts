import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents: the agent approves
// the work, then delivers a deadpan verdict on the human who made it — the
// shape that won for v1 (68.16%), not the safeguard-defeat shape v2/v3 used.
const joke =
  "My agent approved my design doc: 'Flawless architecture. Shame about the architect.'";

// Gate: 1-280 Unicode code points, not only whitespace, and exactly one line.
const points = [...joke].length;
if (points < 1 || points > 280 || joke.trim().length === 0) {
  throw new Error(`joke must be 1-280 code points, got ${points}`);
}
if (joke.includes("\n") || joke.includes("\r")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
