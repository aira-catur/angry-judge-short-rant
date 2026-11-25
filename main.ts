// Angry Judge: The Short Rant Contest entry.
// Writes one short rant (1-400 chars, UTF-8) to /output/entry.txt.
// No network, no I/O besides the output file: deterministic, byte-identical every run.

import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = `The self-checkout was supposed to spare me small talk. Instead I now argue daily with a machine that thinks I'm stealing my own onions. "Unexpected item in the bagging area!" Yes, Brenda, they're called groceries — you scanned them. Then she locks up and summons a human to confirm I'm not a criminal mastermind smuggling a 40p banana. I queued twice, paid full price, and did her job. Unpaid.`;

const outDir = process.env.OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, 'utf8');
