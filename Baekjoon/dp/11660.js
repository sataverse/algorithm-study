const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(item => +item);
const dp = Array.from({ length: n }, () => Array.from({ length: n + 1 }, () => 0));
const mat = [], answer = [];

input.splice(0, n).forEach(element => {
    mat.push(element.split(' ').map(item => +item));
});

for(var i = 0; i < n; i++) {
    for(var j = 0; j < n; j++) {
        dp[i][j + 1] = dp[i][j] + mat[i][j];
    }
}

input.forEach(element => {
    const [x1, y1, x2, y2] = element.split(' ').map(item => +item);
    var temp = 0;
    for(var x = x1 - 1; x < x2; x++) {
        temp += dp[x][y2] - dp[x][y1 - 1];
    }
    answer.push(temp);
});

console.log(answer.join('\n'));

// 구간 합 구하기 5
// https://www.acmicpc.net/problem/11660