const input = require('fs').readFileSync("/dev/stdin").toString().trim();
const n = parseInt(input);
var len = 2;
for(var i = 0; i < n; i++) {
    len = len * 2 - 1;
}
console.log(len * len);

// 지도 자동 구축
// https://softeer.ai/practice/6280