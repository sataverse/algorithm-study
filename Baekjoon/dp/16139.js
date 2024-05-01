const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const str = input.shift();
const n = +input.shift();
const len = str.length;
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const dp = {};
const answer = [];

for(var i = 0; i < 26; i++) {
    dp[alpha[i]] = new Array(len + 1);
    dp[alpha[i]][0] = 0;
}

for(var i = 1; i <= len; i++) {
    for(var j = 0; j < 26; j++) {
        dp[alpha[j]][i] = dp[alpha[j]][i - 1] + ((alpha[j] === str[i - 1]) ? 1 : 0);
    }
}

input.forEach(element => {
    const [a, l, r] = element.split(' ');
    answer.push(dp[a][+r + 1] - dp[a][+l]);
});

console.log(answer.join('\n'));