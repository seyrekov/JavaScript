function boat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);
    let priceBoat = 0;
    switch (season){
        case "Spring":
            priceBoat = 3000;
            break;
        case "Summer":
            priceBoat = 4200;
            break;
        case "Autumn":
            priceBoat = 4200;
            break;
        case "Winter":
            priceBoat = 2600;
            break;
    }

    if (fishers > 0 && fishers <= 6) {
        priceBoat = priceBoat * 0.90;
    }else if(fishers >= 7 && fishers <=11) {
        priceBoat = priceBoat * 0.85;
    }else if(fishers > 12){
        priceBoat = priceBoat * 0.75;
    }
    
    if (fishers % 2 == 0){
        if (season != "Autumn") {
            priceBoat = priceBoat * 0.95
        }
    }
    
    let moneyLeft = Math.abs(budget - priceBoat).toFixed(2)
    if (budget >= priceBoat){
        console.log(`Yes! You have ${moneyLeft} leva left.`);
    }else{
        console.log(`Not enough money! You need ${moneyLeft} leva.`);
    }
}
boat(["3600","Autumn","6"])