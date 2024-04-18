function solution(n, computers) {
    var answer = 0;
    const visited = new Array(n).fill(false);

    for(var i = 0; i < n; i++) {
        for(var j = 0; j < n; j++) {
            if(!visited[i] && computers[i][j] === 1) {
                const queue = [i];
                visited[i] = true;
                while(queue.length > 0) {
                    const t = queue.shift();
                    for(var k = 0; k < n; k++) {
                        if(!visited[k] && computers[t][k] === 1) {
                            queue.push(k);
                            visited[k] = true;
                        }
                    }
                }
                answer++;
            }
        }
    }
    return answer;
}

// 네트워크
// https://school.programmers.co.kr/learn/courses/30/lessons/43162