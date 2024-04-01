//const fs = require('fs');
//const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const input = '6\n-9 -10 10 10 12 14 1'.trim().split('\n');
const n = parseInt(input[0]);
const arr = input[1].split(' ').map(item => parseInt(item));
arr.sort((a, b) => a - b);

var a = 0, b = 1;

if(arr[0] >= 0) {
    a = 0;
    b = 1;
}
else if(arr[n - 1] <= 0) {
    a = n - 2;
    b = n - 1;
}
else {
    var sum = 2000000001, ca = 0, cb = n - 1;
    while(ca < cb) {
        var temp = Math.abs(arr[ca] + arr[cb--]);
        if(temp > sum) {
            ca++;
            cb++;
        }
        else {
            sum = temp;
            a = ca;
            b = cb;
        }
        if(sum === 0) {
            break;
        }
    }
}

console.log(`${arr[a]} ${arr[b]}`);

// '5\n-2 4 -99 -1 93 -96 95 108 -95'
//

// 두 용액
// https://www.acmicpc.net/problem/2470