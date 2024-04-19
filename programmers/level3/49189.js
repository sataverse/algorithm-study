function solution(n, edge) {
    const dist = new Array(n).fill(-1);
    const mat = Array.from(Array(n), () => []);
    const queue = [];
    var max = 0, count = 1;

    edge.forEach(element => {
        mat[element[0] - 1].push(element[1] - 1);
        mat[element[1] - 1].push(element[0] - 1);
    });

    dist[0] = 0;
    queue.push([0, 0]);
    while(queue.length > 0) {
        const [num, d] = queue.shift();
        if(max < d) {
            count = 1;
            max = d;
        }
        else {
            count++;
        }
        for(var i = 0; i < mat[num].length; i++) {
            if(dist[mat[num][i]] === -1) {
                dist[mat[num][i]] = d + 1;
                queue.push([mat[num][i], d + 1]);
            }
        }
        
    }

    return count;
}

// 가장 먼 노드
// https://school.programmers.co.kr/learn/courses/30/lessons/49189