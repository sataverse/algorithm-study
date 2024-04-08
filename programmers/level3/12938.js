function solution(n, s) {
    const num = Math.floor(s / n);
    if(num === 0) {
        return [-1];
    }
    for(var i = 0; i < n; i++) {
        if(num * (n - i) + (num + 1) * i  === s) {
            return [...new Array(n - i).fill(num), ...new Array(i).fill(num + 1)];
        }
    }
    return [-1];
}

// 최고의 집합
// https://school.programmers.co.kr/learn/courses/30/lessons/12938