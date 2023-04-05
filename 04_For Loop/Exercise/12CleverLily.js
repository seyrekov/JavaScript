function nums(input) {
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toy = 0;
    let money = 0;
    let increasement = 0;
    let n = 0;
    for (let i = 1; i <= age; i++){
        let theAge = i;
        if (theAge % 2 == 0){
            if (theAge > 1) {
                increasement =+10
                n +=1
                money += (increasement * n) - 1;
            }
        } else {
            toy +=1;
        }
    }
    let sumToys = toy * toyPrice;
    let sumFinal = money + sumToys;
    let result = Math.abs(sumFinal - priceWashingMachine).toFixed(2);
    if (sumFinal >= priceWashingMachine){
        console.log(`Yes! ${result}`);
    } else {
        console.log(`No! ${result}`);
    }
}
nums(["21","1570.98","3"])
