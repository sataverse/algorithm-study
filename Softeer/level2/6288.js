const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [w, n] = input.shift().split(' ').map(item => parseInt(item));
const arr = input.map(item => item.split(' ').map(num => parseInt(num)));
arr.sort((a, b) => b[1] - a[1]);

var current = 0, index = 0, answer = 0;
while(current < w) {
    if(current + arr[index][0] <= w) {
        answer += arr[index][0] * arr[index][1];
        current += arr[index][0];
        index++;
    }
    else {
        answer += (w - current) * arr[index][1];
        current = w;
    }
}

console.log(answer);

//https://softeer.ai/practice/6288