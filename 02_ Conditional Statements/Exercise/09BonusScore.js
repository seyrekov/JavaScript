function bonus(input) {
let points = Number(input[0]);
let bonus = 0; 
let allpoints = 0;
if (points <= 100) {
    bonus = 5;
} else if (points > 1000) {
    bonus = points * 10 / 100;
} else if (points > 100){
    bonus = points * 20 / 100;
}

if (points % 2 == 0) {
    bonus = bonus + 1;
} else if (points % 10 == 5) {
    bonus = bonus + 2;
}
allpoints = points + bonus
console.log(bonus);
console.log(allpoints);
}
bonus(["15875"])