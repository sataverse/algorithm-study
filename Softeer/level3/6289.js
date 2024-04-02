//const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const input = '5 3\n7 5 7 7 1\n1 2\n2 3\n3 4'.trim().split('\n');
const [n, m] = input.shift().split(' ').map(item => parseInt(item));
const arr = input.shift().split(' ').map(item => parseInt(item));
const w = input.map(item => item.split(' ').map(num => parseInt(num)));
const strong = new Array(n).fill(true);

w.forEach(item => {
    if(arr[item[0] - 1] < arr[item[1] - 1]) {
        strong[item[0] - 1] = false;
    }
    else if(arr[item[0] - 1] > arr[item[1] - 1]){
        strong[item[1] - 1] = false;
    }
    else {
        strong[item[0] - 1] = false;
        strong[item[1] - 1] = false;
    }
});
console.log(strong.filter(item => item).length);


// 우물 안 개구리
// https://softeer.ai/practice/6289