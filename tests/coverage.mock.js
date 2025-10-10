const fs = require("fs");
const path = require("path");

const percent = Number(process.env.COVERAGE_MOCK || 82);
const outDir = path.join(process.cwd(), "coverage");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "summary.txt"), `coverage=${percent}\n`, "utf8");
console.log(`Generated mock coverage: ${percent}%`);
process.exit(0);
