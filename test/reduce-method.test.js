const fs = require('fs');
const path = require('path');

test('Reduce method', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Reduce method
  expect(code).toMatch(/\.reduce\s*\(/);
});
