import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Every Saturday, Dad patrols the garden with his mower, keeping the grass in line. He calls himself the Lawnforcer.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");

