const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, q] = input.shift().split(' ').map(item => parseInt(item));
const arr = input.shift().split(' ').map(item => parseInt(item));
const query = input.map(item => parseInt(item));
const answer = {}

arr.sort((a, b) => b - a);
for(var i = 1; i < n - 1; i++) {
    answer[arr[i]] = i * (n - 1 - i);
}

for(var i = 0; i < q; i++) {
    console.log(query[i] in answer ? answer[query[i]] : 0);
}


// 자동차 테스트
// https://softeer.ai/practice/6247