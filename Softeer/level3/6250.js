const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const n = parseInt(input.shift());
const arr = input.map(item => item.split(' ').map(num => parseInt(num)));
arr.push(arr.reduce((p, c) => p.map((_, i) => p[i] + c[i]), new Array(n).fill(0)));

for(var i = 0; i < 4; i++) {
    const rank = new Array(1001).fill(0);
    const sorted = [...arr[i]].sort((a, b) => b - a);
    var currentRank = 1, currentScore = sorted[0];
    rank[currentScore] = 1;

    for(var j = 1; j < n; j++) {
        const temp = sorted[j];
        currentRank++;
        if(temp < currentScore) {
            rank[temp] = currentRank;
            currentScore = temp;
        }
    }
    console.log(arr[i].map(item => rank[item]).join(' '));
}

// 성적 평가
// https://softeer.ai/practice/6250