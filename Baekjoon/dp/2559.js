const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(item => parseInt(item));
const arr = input[1].split(' ').map(item => parseInt(item));
const dp = [0];
var answer = -10000000;

for(var i = 0; i < n; i++) {
    dp.push(arr[i] + dp[i]);
}

for(var i = k; i <= n; i++) {
    if(answer < dp[i] - dp[i - k]) {
        answer = dp[i] - dp[i - k];
    }
}

console.log(answer);

// 수열
// https://www.acmicpc.net/problem/2559