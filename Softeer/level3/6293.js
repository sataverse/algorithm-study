const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const n = parseInt(input[0]);
const arr = input[1].split(' ').map(item => parseInt(item));
const dp = [1];
var answer = 1;

for(var i = 1; i < n; i++) {
    var temp = 0;
    for(var j = 0; j < i; j++) {
        if(arr[j] < arr[i] && temp < dp[j]) {
            temp = dp[j];
        }
    }
    dp.push(temp + 1);
    if(answer < temp + 1) {
        answer = temp + 1;
    }
}

console.log(answer);

//https://softeer.ai/practice/6293