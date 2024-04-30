const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(item => +item);
const mat = input.map(item => item.split('').map(num => +num));

const bfs = () => {
    const arr = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const visit = [[0, 0]];
    var index = 0;

    mat[0][0] = 2;
    while(true) {
        const [x, y] = visit[index++];
        const d = mat[x][y];

        for(var i = 0; i < 4; i++) {
            const [a, b] = arr[i];
            if(x + a >= 0 && x + a < n && y + b >= 0 && y + b < m) {
                if(mat[x + a][y + b] === 1) {
                    if(x + a === n - 1 && y + b === m - 1) {
                        return d;
                    }
                    mat[x + a][y + b] = d + 1;
                    visit.push([x + a, y + b]);
                }
            }
        }
    }
}

console.log(bfs());