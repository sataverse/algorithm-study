const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [nums, ...words] = input;
const [n, m] = nums.split(' ').map(item => parseInt(item));
const memory = [];
const freq = {};

words.forEach(item => {
    if(item.length >= m) {
        if(item in freq) {
            freq[item]++;
        }
        else {
            freq[item] = 1;
            memory.push(item);
        }
    }
});

memory.sort((a, b) => {
    if(freq[a] === freq[b]) {
        if(a.length === b.length) {
            return a > b ? 1 : -1;
        }
        else{
            return b.length - a.length;
        }
    }
    else {
        return freq[b] - freq[a];
    }
});

console.log(memory.join('\n'));



// 영단어 암기는 괴로워
// https://www.acmicpc.net/problem/20920