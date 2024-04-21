const input = require('fs').readFileSync("/dev/stdin").toString().trim();
const n = parseInt(input);
const dp = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

for(var i = 1; i < n; i++) {
    dp.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    dp[i][0] = dp[i - 1][1];
    for(var j = 1; j < 9; j++) {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    }
    dp[i][9] = dp[i - 1][8];
}
var sum = 0;
for(var i = 0; i < 10; i++) {
    sum = (sum + dp[n - 1][i]) % 1000000000;
}
console.log(sum);

// 쉬운 계단 수
// https://www.acmicpc.net/problem/10844