function painting(input) {
    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5.00;
    let bags = 0.40;
    

    let nylonNeed = (Number(input[0]) + 2) * nylonPrice;
    let paintNeed = ((Number(input[1]) * 0.10) + Number(input[1])) * paintPrice;
    let thinnerNeed = Number(input[2]) * thinnerPrice;
    let sumPricePercentage = (nylonNeed + paintNeed + thinnerNeed + bags) * 0.30; 
    let workingHours = Number(input[3]) * sumPricePercentage
    let totalSum = workingHours + (nylonNeed + paintNeed + thinnerNeed + bags);

    console.log(`${totalSum}`); 
}
painting(["10","11","4","8"])