function solution(s) {
    var answer = s.replaceAll('zero', '0').replaceAll('one', '1').replaceAll('two', '2').replaceAll('three', '3').replaceAll('four', '4').replaceAll('five', '5').replaceAll('six', '6').replaceAll('seven', '7').replaceAll('eight', '8').replaceAll('nine', '9');
    return parseInt(answer);
}

console.log('123');

// 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301