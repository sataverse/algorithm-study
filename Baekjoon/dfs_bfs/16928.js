const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const board = Array.from({ length: 101 }, (_, i) => i);
const step = new Array(101).fill(0);
input.shift();
input.forEach(element => {
    const [a, b] = element.split(' ').map(item => +item);
    board[a] = b;
});

const bfs = () => {
    const q = [1];
    var index = 0;

    while(true) {
        const n = q[index++];
        for(var i = 1; i <= 6; i++) {
            if(n + i >= 100) {
                return step[n] + 1;
            }
            else {
                if(step[n + i] === 0) {
                    step[n + i] = step[n] + 1;
                    if(n + i !== board[n + i]) {
                        if(step[board[n + i]] === 0) {
                            step[board[n + i]] = step[n] + 1;
                            q.push(board[n + i]);
                        }
                    }
                    else {
                        q.push(board[n + i]);
                    }
                }
            }
        }
    }
}

console.log(bfs());


// 뱀과 사다리 게임
// https://www.acmicpc.net/problem/16928