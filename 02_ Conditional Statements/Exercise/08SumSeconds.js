function secondsSum(input) {
    let runner1 = Number(input[0]);
    let runner2 = Number(input[1]);
    let runner3 = Number(input[2]);

    let sumTime = runner1+runner2+runner3;
    
    let minutesSum = Math.floor(sumTime / 60);
    let secondsSum = sumTime % 60;

    if (secondsSum < 10){
        console.log(`${minutesSum}:0${secondsSum}`);
    } else {
        console.log(`${minutesSum}:${secondsSum}`);
    }

}
secondsSum(["50","50","49"])