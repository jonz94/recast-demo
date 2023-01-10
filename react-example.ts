import { readFileSync } from 'node:fs';
import { parse } from 'recast/parsers/babel-ts';

// example code from https://github.com/benjamn/recast/issues/1258
const reactTsxSource = readFileSync('./code.tsx', { encoding: 'utf-8' });

const tsAst = parse(reactTsxSource);

console.log(tsAst);
