import { parse as parseTypescript } from 'recast/parsers/typescript';

// example code from https://github.com/benjamn/recast/blob/4d389c493e292f7a6f4b352e8baa45942da6c558/README.md#usage
const source = [
  'function add(a, b): number {',
  '  return a +',
  '    // Weird formatting, huh?',
  '    b;',
  '}',
].join('\n');

const ast = parseTypescript(source);

console.log(ast);
