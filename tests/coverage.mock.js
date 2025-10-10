// tests/coverage.mock.js
const fs = require("fs");
const path = require("path");

// 可用 COVERAGE_MOCK 覆蓋，例如 60/85…；預設 82
const pct = Number(process.env.COVERAGE_MOCK || 82);

const outDir = path.join(process.cwd(), "coverage");
fs.mkdirSync(outDir, { recursive: true });

// 只要 total.lines.pct，可最小化生成
const summary = {
  total: {
    lines:      { total: 100, covered: Math.round(100 * pct / 100), skipped: 0, pct },
    statements: { total: 100, covered: Math.round(100 * pct / 100), skipped: 0, pct },
    branches:   { total: 100, covered: Math.round(100 * pct / 100), skipped: 0, pct },
    functions:  { total: 100, covered: Math.round(100 * pct / 100), skipped: 0, pct }
  }
};

fs.writeFileSync(path.join(outDir, "coverage-summary.json"), JSON.stringify(summary, null, 2), "utf8");
fs.writeFileSync(path.join(outDir, "text-summary.txt"), `Lines: ${pct}%\n`, "utf8");
console.log(`Generated mock coverage: ${pct}% at coverage/coverage-summary.json`);
