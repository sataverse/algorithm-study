function solution(genres, plays) {
    const arr = [];
    const obj = {};

    for(var i = 0; i < genres.length; i++) {
        if(genres[i] in obj === false) {
            obj[genres[i]] = { plays: plays[i], list: [i] };
        }
        else {
            const temp = obj[genres[i]];
            temp.plays += plays[i];
            if(temp.list.length == 1) {
                if(plays[temp.list[0]] < plays[i]) {
                    temp.list.unshift(i);
                }
                else {
                    temp.list.push(i);
                }
            }
            else {
                if(plays[temp.list[0]] < plays[i]) {
                    temp.list.unshift(i);
                    temp.list.pop();
                }
                else if(plays[temp.list[1]] < plays[i]) {
                    temp.list[1] = i;
                }
            }
        }
    }

    for(var key in obj) {
        arr.push(obj[key]);
    }
    arr.sort((a, b) => b.plays - a.plays);

    return arr.reduce((pre, cur) => [...pre, ...cur.list], []);
}

// 베스트앨범
// https://school.programmers.co.kr/learn/courses/30/lessons/42579