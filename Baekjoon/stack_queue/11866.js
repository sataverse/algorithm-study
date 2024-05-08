const input = require('fs').readFileSync("/dev/stdin").toString().trim();
const [n, k] = input.split(' ').map(item => +item);
const arr = Array.from({ length: n }, (_, i) => i + 1);
const answer = [];
let index = 0, length = n;

while(length > 0) {
    index = (index + k - 1) % length--;
    answer.push(arr.splice(index, 1));
}

console.log(`<${answer.join(', ')}>`);

// 요세푸스 문제 0
// https://www.acmicpc.net/problem/11866