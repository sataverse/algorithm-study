function solution(friends, gifts) {
    var answer = 0;
    const nameTable = {};
    const wholePoint = [];
    const freindsPoint = Array.from(new Array(friends.length), () => new Array(friends.length).fill(0));
    for(var i = 0; i < friends.length; i++) {
        nameTable[friends[i]] = i;
        wholePoint.push(0);
    }
    gifts.forEach(element => {
        const [give, take] = element.split(' ').map(item => nameTable[item]);
        wholePoint[give]++;
        wholePoint[take]--;
        freindsPoint[give][take]++;
        freindsPoint[take][give]--;
    });
    for(var i = 0; i < friends.length; i++) {
        var temp = 0;
        for(var j = 0; j < friends.length; j++) {
            if(freindsPoint[i][j] > 0) {
                temp++;
            }
            else if(freindsPoint[i][j] == 0) {
                if(wholePoint[i] > wholePoint[j]) {
                    temp++;
                }
            }
        }
        if(temp > answer) {
            answer = temp;
        }
    }

    return answer;
}

// 가장 많이 받은 선물
// https://school.programmers.co.kr/learn/courses/30/lessons/258712