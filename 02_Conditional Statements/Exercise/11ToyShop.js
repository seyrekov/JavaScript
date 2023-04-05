function toyShop(input){
    let costTrip = Number(input[0]);
    let puzzle = Number(input[1]);
    let talkDoll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minions = Number(input[4]);
    let truck = Number(input[5]);

    
    let puzzlePrice = puzzle*2.60;
    let talkDollPrice = talkDoll*3;
    let teddyBearPrice = teddyBear*4.10;
    let minionsPrice = minions*8.20;
    let truckPrice = truck*2;

    let numberToys = puzzle + talkDoll + teddyBear + minions + truck;
    let profit = puzzlePrice + talkDollPrice + teddyBearPrice + minionsPrice + truckPrice;
    
    if (numberToys >= 50){
        profit = profit * 0.75;
    }
    
    profit = profit * 0.90;
    let result = Math.abs(profit - costTrip).toFixed(2)
    if (costTrip <= profit) {
        console.log(`Yes! ${result} lv left.`);
    } else {
        console.log(`Not enough money! ${result} lv needed.`);
    }
}
toyShop(["40.8","20","25","30","50","10"])

