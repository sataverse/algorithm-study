const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(item => parseInt(item));
const arr = ('0 ' + input.shift()).split(' ').map(item => parseInt(item));
const range = input.map(item => item.split(' ').map(num => parseInt(num)));
const res = [];

for(var i = 1; i <= n; i++) {
    arr[i] += arr[i - 1];
}

for(var i = 0; i < m; i++) {
    res.push(arr[range[i][1]] - arr[range[i][0] - 1]);
}

console.log(res.join('\n'));

// 구간 합 구하기 4
// https://www.acmicpc.net/problem/11659