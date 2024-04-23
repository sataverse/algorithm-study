const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const n = parseInt(input.shift());
const meeting = input.map(item => item.split(' ').map(num => parseInt(num)));
meeting.sort((a, b) => {
    if(a[1] !== b[1]){
        return a[1] - b[1];
    }
    else {
        return a[0] - b[0];
    }
});

var end = 0, answer = 0;
meeting.forEach(element => {
    if(element[0] >= end) {
        answer++;
        end = element[1];
    }
});

console.log(answer);

// 회의실 배정
// https://www.acmicpc.net/problem/1931