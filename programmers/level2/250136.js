function solution(land) {
    const col = land.length, row = land[0].length;
    const groupNums = Array.from(new Array(col), () => new Array(row).fill(-1));
    const quantity = [];
    var currentGroup = 0, answer = 0;

    for(var y = 0; y < col; y++) {
        for(var x = 0; x < row; x++) {
            if(land[y][x] === 1 && groupNums[y][x] === -1) {
                const queue = [[y, x]];
                groupNums[y][x] = currentGroup;
                quantity.push(0);
                while(queue.length > 0) {
                    const [currentY, currentX] = queue.shift();
                    quantity[currentGroup]++;
                    if(currentY > 0 && groupNums[currentY - 1][currentX] === -1 && land[currentY - 1][currentX] === 1) {
                        groupNums[currentY - 1][currentX] = currentGroup;
                        queue.push([currentY - 1, currentX]);
                    }
                    if(currentY < col - 1 && groupNums[currentY + 1][currentX] === -1 && land[currentY + 1][currentX] === 1) {
                        groupNums[currentY + 1][currentX] = currentGroup;
                        queue.push([currentY + 1, currentX]);
                    }
                    if(currentX > 0 && groupNums[currentY][currentX - 1] === -1 && land[currentY][currentX - 1] === 1) {
                        groupNums[currentY][currentX - 1] = currentGroup;
                        queue.push([currentY, currentX - 1]);
                    }
                    if(currentX < row - 1 && groupNums[currentY][currentX + 1] === -1 && land[currentY][currentX + 1] === 1) {
                        groupNums[currentY][currentX + 1] = currentGroup;
                        queue.push([currentY, currentX + 1]);
                    }
                }
                currentGroup++;
            }
        }
    }

    for(var x = 0; x < row; x++) {
        const visited = new Array(currentGroup).fill(false);
        var temp = 0;
        for(var y = 0; y < col; y++) {
            const groupNum = groupNums[y][x];
            if(groupNum !== -1 && !visited[groupNum]) {
                temp += quantity[groupNum];
                visited[groupNum] = true;
            }
        }
        if(temp > answer) {
            answer = temp;
        }
    }

    return answer;
}

console.log(solution([[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]]))
console.log(solution([[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 1, 1]]))

// 석유 시추
// https://school.programmers.co.kr/learn/courses/30/lessons/250136