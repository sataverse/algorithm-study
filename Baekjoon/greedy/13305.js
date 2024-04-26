const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const n = parseInt(input[0]);
const distance = input[1].split(' ').map(item => parseInt(item));
const price = input[2].split(' ').map(item => parseInt(item));
var min = 1000000000;
var sum = BigInt(0);

for(var i = 0; i < n - 1; i++) {
    if(price[i] < min) {
        min = price[i];   
    }
    sum += BigInt(min) * BigInt(distance[i]);
}

console.log(sum + '');

// 주유소
// https://www.acmicpc.net/problem/13305