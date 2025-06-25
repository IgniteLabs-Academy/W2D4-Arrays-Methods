const fs = require('fs');
const path = require('path');

test('Filter method', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Filter method
  expect(code).toMatch(/\.filter\s*\(/);
});
