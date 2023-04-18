function tennis(input) {
    let tournaments = Number(input[0]);
    let points = Number(input[1]);

    let points1 = 0;
    let points2 = 0;
    let points3 = 0;
    
    let finalPoints = 0;
    let averagePoints = 0;
    let wins = 0;
    let averageWins = 0;


for (let index = 2; index <= input.length; index++){
    let tour = String(input[index]);
    switch (tour) {
        case "W":
            points1 += 2000
            wins +=1
            break;
        case "F":
            points2 += 1200
            break;
        case "SF":
            points3 += 720
            break;
    }
    finalPoints = points + points1 + points2 + points3
    averagePoints = (points1 + points2 + points3) / tournaments
    averageWins = (wins / tournaments) * 100

}
console.log(`Final points: ${finalPoints}`);
console.log(`Average points: ${Math.floor(averagePoints)}`);
console.log(`${averageWins.toFixed(2)}%`);
}