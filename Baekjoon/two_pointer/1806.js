const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, s] = input[0].split(' ').map(item => +item);
const arr = input[1].split(' ').map(item => + item);
var c = 0, j = 0, answer = n + 1;

for(var i = 0; i < n; i++) {
    c += arr[i];
    while(c >= s) {
        c -= arr[j];
        answer = Math.min(answer, i - j + 1);
        j++;
    }
}

console.log(answer === n + 1 ? 0 : answer);

// 부분합
// https://www.acmicpc.net/problem/1806