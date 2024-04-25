const input = require('fs').readFileSync("/dev/stdin").toString().trim();
const [v, e] = input.shift().split(' ').map(item => parseInt(item));
const k = parseInt(input.shift()) - 1;
const arr = input.map(item => item.split(' ').map(num => parseInt(num)));
const mat = Array.from({ length: v }, (_, i1) => Array.from({ length: v }, (_, i2) => i1 === i2 ? 0 : 200001));
arr.forEach(element => {
    const [a, b, w] = element;
    mat[a - 1][b - 1] = w;
});
const visited = new Array(v).fill(false);
const distance = [...mat[k]];

var n = k;
while(true) {
    var index = -1, min = 200001;
    visited[n] = true;
    for(var i = 0; i < v; i++) {
        if(!visited[i]) {
            distance[i] = Math.min(distance[i], distance[n] + mat[n][i]);
            if(min > distance[i]) {
                min = distance[i];
                index = i;
            }
        }
    }
    if(index === -1) {
        break;
    }
    n = index;
}

for(var i = 0; i < v; i++) {
    console.log(distance[i] > 200000 ? 'INF' : distance[i]);
}

// 최단경로
// https://www.acmicpc.net/problem/1753