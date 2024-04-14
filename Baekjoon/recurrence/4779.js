const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const arr = input.map(item => parseInt(item));
const getCantorSet = str => {
    const n = str.length;
    if(n === 1) {
        return str;
    }
    return getCantorSet(str.slice(0, n / 3)) + str.slice(n / 3, 2 * n / 3).replace(/-/g, ' ') + getCantorSet(str.slice(2 * n / 3, n));
}

arr.forEach(item => {
    const temp = new Array(Math.pow(3, item)).fill('-');
    console.log(getCantorSet(temp.join('')));
});

// 칸토어 집합
// https://www.acmicpc.net/problem/4779