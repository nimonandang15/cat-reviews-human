import * as fs from "node:fs";

// One funny single-line one-star review written by a house cat about
// its human: he bought an expensive cat bed, then stole the cat's own
// warm spot on the laptop. The sting is the last sentence — the cat
// has escalated the complaint to the sun, the highest feline authority.
const text = "One star. He bought me a $90 bed, then slept in my spot on the warm laptop. I have reported him to the sun.";

// Gate: one line, 1–200 characters, UTF-8, not only whitespace.
// The line is 107 characters, all plain ASCII, so characters and
// bytes agree; it is written with no trailing newline,
// so the file is 107 bytes — the smaller text wins an exact tie.
if (text.length !== 107) {
  throw new Error(`Expected the 107-character review, got ${text.length}`);
}
if (text.length < 1 || text.length > 200) {
  throw new Error(`Expected 1–200 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("Entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
