function solution(routes) {
    var answer = 0, camera = -30001;
    routes.sort((a, b) => a[1] - b[1]);

    routes.forEach(element => {
        if(camera < element[0]) {
            answer++;
            camera = element[1];
        }
    });
    
    return answer;
}

// 단속카메라
// https://school.programmers.co.kr/learn/courses/30/lessons/42884