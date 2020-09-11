const fs = require('fs');

const shebangLine = '#!/usr/bin/env node';
const EOF = "\n";
const index = 'dist/index.js';
const content = fs.readFileSync(index, {
  encoding: 'utf-8',
});

fs.writeFileSync(index, `${shebangLine}${EOF}${content}`);
