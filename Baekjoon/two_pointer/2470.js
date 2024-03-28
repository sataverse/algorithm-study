//const fs = require('fs');
//const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const input = '5\n-2 4 -99 -1 93 -96 95 108 -95'.trim().split('\n');
const n = parseInt(input[0]);
const arr = input[1].split(' ').map(item => parseInt(item));
arr.sort((a, b) => a - b);

var a = 0, b = 1, sum = 2000000001, cb = 1;

for(var i = cb; i < arr.length; i++) {
    var temp = Math.abs(arr[0] + arr[i]);
    if(temp > sum) {
        break;
    }
    sum = temp;
    a = 0;
    b = i;
    cb = i;
}

for(var ca = 1; ca < arr.length; ca++) {
    while(ca < cb) {
        var temp = Math.abs(arr[ca] + arr[cb]);
        if(temp > sum) {
            if(ca === a) {
                cb++;
            }
            break;
        }
        sum = temp;
        a = ca;
        b = cb;
        cb--;
    }
    if(ca >= cb) {
        break;
    }
}

console.log(`${arr[a]} ${arr[b]}`);

// 두 용액
// https://www.acmicpc.net/problem/2470