// tests/mock.test.js
console.log("Running automated tests...");
const passed = true; // 改成 false 可模擬失敗
if (passed) {
  console.log("✅ Tests passed!");
  process.exit(0);
} else {
  console.error("❌ Tests failed!");
  process.exit(1);
}
