const fs = require('fs');
const path = require('path');

test('Map method', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Map method
  expect(code).toMatch(/\.map\s*\(/);
});
