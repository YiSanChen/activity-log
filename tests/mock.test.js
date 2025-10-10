// tests/coverage.mock.js
// Generate a minimal coverage report compatible with parsing in CI.
const fs = require("fs");
const path = require("path");

// 可用環境變數覆蓋，例如在 CI 設 COVERAGE_MOCK=72 來測試門檻行為
const pct = Number(process.env.COVERAGE_MOCK || 82);

// 準備 coverage 資料夾
const outDir = path.join(process.cwd(), "coverage");
fs.mkdirSync(outDir, { recursive: true });

// 給出符合 Jest 的 coverage-summary.json 的最小結構（只用到 total.lines.pct）
const summary = {
  total: {
    lines: { total: 100, covered: Math.round(100 * pct / 100), skipped: 0, pct },
    statements: { total: 100, covered: Math.round(100 * pct / 100), skipped: 0, pct },
    branches: { total: 100, covered: Math.round(100 * pct / 100), skipped: 0, pct },
    functions: { total: 100, covered: Math.round(100 * pct / 100), skipped: 0, pct }
  }
};

fs.writeFileSync(path.join(outDir, "coverage-summary.json"), JSON.stringify(summary, null, 2), "utf8");
fs.writeFileSync(path.join(outDir, "text-summary.txt"), `Lines: ${pct}%\n`, "utf8");
console.log(`Generated mock coverage: ${pct}% at ${path.join("coverage", "coverage-summary.json")}`);
