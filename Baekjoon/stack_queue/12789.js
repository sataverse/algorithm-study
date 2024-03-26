const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const n = parseInt(input[0]);
const area1 = input[1].split(' ').map(item => parseInt(item));
const area2 = [];

var current = 1;
var answer = 'Nice';

while(area1.length > 0) {
    if(area1[0] === current) {
        area1.shift();
        current++;
        continue;
    }
    else if(area2.length > 0 && area2[area2.length - 1] === current) {
        area2.pop();
        current++;
        continue;
    }
    const num = area1.shift();
    area2.push(num);
    if(area2.length >= 2 && area2[area2.length - 1] > area2[area2.length - 2]) {
        answer = 'Sad';
        break;
    }
}

console.log(answer);

//https://www.acmicpc.net/problem/12789