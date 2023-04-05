function lunch (input) {
    let series = input[0];
    let timingSeries = Number(input[1]);
    let lunchBreak = Number(input[2]);
    let foodTime = lunchBreak / 8;
    let restTime = lunchBreak * 0.25;
    let neededTime = foodTime + restTime + timingSeries;
    let result = Math.abs(lunchBreak - neededTime);
    if (lunchBreak >= neededTime) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(result)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(result)} more minutes.`)
    }

}
lunch(["Teen Wolf", "48", "60"])