const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const n = parseInt(input[0]);
const arr = input[1].split(' ').map(item => parseInt(item));
const x = parseInt(input[2]);

var left = 0, right = n - 1, answer = 0;
arr.sort((a, b) => a - b);

while(left < right) {
    while(left < right && arr[left] + arr[right] > x) {
        right--;
    }
    while(left < right && arr[left] + arr[right] === x) {
        left++;
        right--;
        answer++;
    }
    while(left < right && arr[left] + arr[right] < x) {
        left++;
    }
}
console.log(answer);


// 두 수의 합
// https://www.acmicpc.net/problem/3273