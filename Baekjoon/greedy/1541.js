const input = require('fs').readFileSync("/dev/stdin").toString().trim();
const [initial, ...last] = input.split('-').map(item => item.split('+').reduce((p, c) => p + parseInt(c), 0));
console.log(last.reduce((p, c) => p - c, initial));

// 잃어버린 괄호
// https://www.acmicpc.net/problem/1541