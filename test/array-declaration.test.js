const fs = require('fs');
const path = require('path');

test('Array declaration', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Array declaration
  expect(code).toMatch(/let\s+fruits\s*=\s*\[.*\]/);
});
