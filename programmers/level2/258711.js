function solution(edges) {
    const answer = [0, 0, 0, 0];
    var last = 0, sum = 0;

    edges.forEach(element => {
        const [a, b] = element;
        if(last < Math.max(a, b)) {
            last = Math.max(a, b);
        }
    });

    const inner = new Array(last + 1).fill(0);
    const outer = new Array(last + 1).fill(0);

    edges.forEach(element => {
        const [a, b] = element;
        outer[a]++;
        inner[b]++;
    });

    for(var i = 1; i <= last; i++) {
        if(inner[i] === 0 && outer[i] > 1) {
            sum = outer[i];
            answer[0] = i;
        }
        else if(inner[i] > 0 && outer[i] === 0) {
            answer[2]++;
        }
        else if(inner[i] > 1 && outer[i] === 2) {
            answer[3]++;
        }
    }

    answer[1] = sum - answer[2] - answer[3];
    return answer;
}


// 도넛과 막대 그래프
// https://school.programmers.co.kr/learn/courses/30/lessons/258711