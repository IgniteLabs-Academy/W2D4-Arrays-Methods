const fs = require('fs');
const path = require('path');

test('Array console log', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Array console log
  expect(code).toMatch(/console\.log\(.*fruits.*\)/);
});
