// One Line, One Laugh — writes the single entry line to entry.txt.
// Deterministic: the same bytes on every run, no network, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "My savings plan: I hide cash in my bedroom and call it a bank with extremely limited hours and one very nervous security guard — me.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
