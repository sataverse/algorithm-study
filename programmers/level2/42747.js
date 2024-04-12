function solution(citations) {
    var index = 0;
    citations.sort((a, b) => b - a);
    
    while(index < citations.length) {
        if(citations[index] < index + 1) {
            return index;
        }
        index++;
    }

    return citations.length;
}

// H-Index
// https://school.programmers.co.kr/learn/courses/30/lessons/42747