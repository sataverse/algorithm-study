function solution(sticker) {
    const n = sticker.length;

    if(n === 1) {
        return sticker[0];
    }
    else if(n === 2) {
        return Math.max(sticker[0], sticker[1]);
    }

    const dp1 = new Array(n - 1).fill(0);
    const dp2 = new Array(n).fill(0);
    dp1[0] = sticker[0];
    dp1[1] = sticker[0];
    dp2[0] = 0;
    dp2[1] = sticker[1];

    for(var i = 2; i < n - 1; i++) {
        dp1[i] = (Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]));
        dp2[i] = (Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]));
    }
    dp2[n - 1] = (Math.max(dp2[n - 2], dp2[n - 3] + sticker[n - 1]));

    return Math.max(dp1[n - 2], dp2[n - 1]);
}

// 스티커 모으기(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/12971