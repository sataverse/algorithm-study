function solution(n, costs) {
    var answer = 0;
    const mat = Array.from(Array(n), () => new Array(n).fill(Infinity));
    const visited = new Array(n).fill(false);
    const queue = [];

    costs.forEach(element => {
        const [a, b, c] = element;
        mat[a][b] = c;
        mat[b][a] = c;
    });

    visited[0] = true;
    for(var i = 0; i < n; i++) {
        if(mat[0][i] !== Infinity) {
            queue.push([i, mat[0][i]]);
        }
    }

    for(var i = 1; i < n; i++) {
        var index = 0, min = 0;
        while(index < queue.length) {
            if(visited[queue[index][0]]) {
                queue.splice(index, 1);
            }
            else {
                if(queue[min][1] > queue[index][1]) {
                    min = index;
                }
                index++;
            }
        }

        const [v, cost] = queue[min];
        visited[v] = true;
        answer += cost;

        for(var j = 0; j < n; j++) {
            if(mat[v][j] !== Infinity && !visited[j]) {
                queue.push([j, mat[v][j]]);
            }
        }
    }

    return answer;
}

// 섬 연결하기
// https://school.programmers.co.kr/learn/courses/30/lessons/42861