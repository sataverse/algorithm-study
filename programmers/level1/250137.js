function solution(bandage, health, attacks) {
    var time = 0, success = 0, currentHealth = health;
    while(currentHealth > 0 && attacks.length > 0) {
        if(attacks[0][0] == ++time) {
            currentHealth -= attacks[0][1]; 
            success = 0;
            attacks.shift();
        }
        else {
            currentHealth += bandage[1];
            success++;
            if(success == bandage[0]) {
                currentHealth += bandage[2];
                success = 0;
            }
            if(currentHealth > health) {
                currentHealth = health;
            }
        }
    }
    
    return currentHealth > 0 ? currentHealth : -1;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/250137