const fs = require('fs');
const path = require('path');

test('Array declaration', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Array declaration (let, const, or var)
  expect(code).toMatch(/(let|const|var)\s+fruits\s*=\s*\[.*\]/);
});
