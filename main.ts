// Warning label for humans — one line, UTF-8, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "WARNING: This human will circle back, touch base, and leverage synergies until the deadline quietly dies of old age.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
