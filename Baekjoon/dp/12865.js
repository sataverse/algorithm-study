const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(num => parseInt(num));
const dp = new Array(k + 1).fill(0);
for(var i = 1; i <= n; i++) {
    const [w, v] = input[i].split(' ').map(num => parseInt(num));
    const arr = new Array(k + 1).fill(0);
    arr[w] = v;
    for(var j = 1; j <= k; j++) {
        if(j + w <= k && dp[j] != 0 && arr[j + w] == 0) {
            arr[j + w] = dp[j] + arr[w];
        }
        dp[j] = Math.max(dp[j], arr[j]);
    }
}
console.log(Math.max(...dp));

//https://www.acmicpc.net/problem/12865