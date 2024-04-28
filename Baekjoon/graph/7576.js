const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [m, n] = input.shift().split(' ').map(item => +item);
const mat = input.map(item => item.split(' ').map(num => +num));
const queue = [];
var tomatoes = 0, day = 0, index = 0;

for(var i = 0; i < n; i++) {
    for(var j = 0; j < m; j++) {
        if(mat[i][j] === 1) {
            queue.push({ i, j, d: 0 });
        }
        else if(mat[i][j] === -1) {
            tomatoes++;
        }
    }
}

while(queue.length > index) {
    const { i, j, d } = queue[index++];
    tomatoes++;
    day = d;

    if(i > 0 && mat[i - 1][j] === 0) {
        mat[i - 1][j] = 1;
        queue.push({ i: i - 1, j, d: d + 1 });
    }
    if(i < n - 1 && mat[i + 1][j] === 0) {
        mat[i + 1][j] = 1;
        queue.push({ i: i + 1, j, d: d + 1 });
    }
    if(j > 0 && mat[i][j - 1] === 0) {
        mat[i][j - 1] = 1;
        queue.push({ i, j: j - 1, d: d + 1 });
    }
    if(j < m - 1 && mat[i][j + 1] === 0) {
        mat[i][j + 1] = 1;
        queue.push({ i, j: j + 1, d: d + 1 });
    }
}

console.log(tomatoes === m * n ? day : -1);

// 토마토
// https://www.acmicpc.net/problem/7576