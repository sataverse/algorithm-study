function solution(triangle) {
    const n = triangle.length;
    for(var i = n - 2; i >= 0; i--) {
        for(var j = 0; j <= i; j++) {
            triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0];
}

// 정수 삼각형
// https://school.programmers.co.kr/learn/courses/30/lessons/43105