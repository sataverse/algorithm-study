const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [k, p, n] = input.split(' ').map(item => parseInt(item));

var current = k;
for(var i = 0; i < n; i++) {
    current = Number((BigInt(current) * BigInt(p)) % BigInt(1000000007));
}
console.log(current);

// 바이러스
// https://softeer.ai/practice/6284