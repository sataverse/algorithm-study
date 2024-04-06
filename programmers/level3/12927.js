function solution(n, works) {
    const sorted = [...works].sort((a, b) => b - a);
    sorted.push(0);
    var index = 0, temp = sorted[0];

    for(var i = 0; i < n; i++) {
        sorted[index]--;
        if(sorted[index] === 0 && sorted[index + 1] === 0) {
            return 0;
        }
        if(temp > sorted[index]) {
            if(temp <= sorted[index + 1]) {
                index++;
            }
            else {
                index = 0;
                temp = sorted[0];
            }
        }
    }
    
    return sorted.reduce((p, c) => p + c * c, 0);
}

// 야근 지수
// https://school.programmers.co.kr/learn/courses/30/lessons/12927