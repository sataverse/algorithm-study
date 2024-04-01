//const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const input = '5\n3 2 1 -3 -1'.trim().split('\n');
const n = parseInt(input[0]);
const arr = input[1].split(' ').map((item, idx) => [idx + 1, parseInt(item)]);
const pop = [1];
var dist = arr.shift()[1];
var index = 0;

for(var i = n - 1; i > 0; i--) {
    if(dist > 0) {
        index = (index + (dist - 1)) % i;
    }
    else {
        index = i - ((index - dist) % i);
    }
    const temp = index === i ? 0 : index;
    const [a, b] = arr.splice(temp, 1)[0];
    pop.push(a);
    dist = b;
}

console.log(pop.join(' '));

// 풍선 터뜨리기
// https://www.acmicpc.net/problem/2346