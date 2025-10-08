// tests/mock.test.js
console.log("Running automated tests...");
/**
 * 這裡你可以改成真正的測試，例如 vitest/jest/mocha。
 * 現在先做一個會通過的假測試（失敗時改成 process.exit(1)）
 */
const passed = true; // 改成 false 可測試 fail 情境
if (passed) {
  console.log("✅ Tests passed!");
  process.exit(0);
} else {
  console.error("❌ Tests failed!");
  process.exit(1);
}
