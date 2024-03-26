function solution(n) {
    var dp = [1, 2];
    for(var i = 2; i < n; i++) {
        dp.push((dp[i - 2] + dp[i- 1]) % 1234567);
    }
    return dp[n - 1];
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12914