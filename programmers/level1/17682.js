function solution(dartResult) {
    var first = 3, index = 0;
    const arr = dartResult.split(/[S|D|T|*|#]/g).filter(item => item !== '').map(item => parseInt(item));
    
    if(dartResult[1] === 'D') {
        arr[index] *= arr[index];
    }
    else if(dartResult[1] === 'T') {
        arr[index] *= arr[index] * arr[index];
    }
    if(dartResult[2] === '*') {
        arr[index] *= 2;
        first = 4;
    }
    else if(dartResult[2] === '#') {
        arr[index] *= -1;
        first = 4;
    }
    index++;

    for(var i = first; i < dartResult.length; i++) {
        if(dartResult[i] === 'S') {
            index++;
        }
        if(dartResult[i] === 'D') {
            arr[index] *= arr[index];
            index++;
        }
        else if(dartResult[i] === 'T') {
            arr[index] *= arr[index] * arr[index];
            index++;
        }
        else if(dartResult[i] === '*') {
            arr[index - 1] *= 2;
            arr[index - 2] *= 2;
        }
        else if(dartResult[i] === '#') {
            arr[index - 1] *= -1;
        }
    }
    console.log(arr);

    return arr.reduce((p, c) => p + c, 0);
}
console.log(solution('1D2S#10S'));

// 다트 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/17682