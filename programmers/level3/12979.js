function solution(n, stations, w) {
    var answer = 0, i = 0;
    const arr = [];

    if(stations[i] - (w + 1) > 0) {
        arr.push(stations[i] - (w + 1));
    }
    while(i < stations.length - 1) {
        i++;
        arr.push((stations[i] - (w + 1)) - (stations[i - 1] + w + 1) + 1);
    }
    if(stations[i] + w + 1 <= n) {
        arr.push(n - (stations[i] + w + 1) + 1);
    }

    arr.forEach(num => {
        answer += Math.ceil(num / (w * 2 + 1));
    });
    
    return answer;
}

// 기지국 설치
// https://school.programmers.co.kr/learn/courses/30/lessons/12979