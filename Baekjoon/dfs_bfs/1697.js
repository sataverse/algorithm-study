const input = require('fs').readFileSync("/dev/stdin").toString().trim();
const [n, k] = input.split(' ').map(item => +item);

const bfs = () => {
    const step = new Array(100001).fill(-1);
    const arr = [n];
    var index = 0;
    step[n] = 0;

    while(true) {
        const pos = arr[index++];
        if(pos === k) {
            return step[pos];
        }
        [pos - 1, pos + 1, pos * 2].forEach(item => {
            if(item >= 0 && item <= 100000 && step[item] === -1) {
                arr.push(item);
                step[item] = step[pos] + 1;
            }
        });
    }
}

console.log(bfs());

// 숨바꼭질
// https://www.acmicpc.net/problem/1697