const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const time = input[1].split(' ').map(item => parseInt(item));
time.sort((a, b) => a - b);

var answer = 0, sum = 0;
time.forEach(element => {
    sum += element;
    answer += sum;
});

console.log(answer);

// ATM
// https://www.acmicpc.net/problem/11399