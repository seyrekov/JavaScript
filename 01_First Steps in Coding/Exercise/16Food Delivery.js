function food(input) {
    let chicken = 10.35;
    let fish = 12.40;
    let vegi = 8.15;
    let delivery = 2.50;
    
    let numberChicken = Number(input[0]) * chicken;
    let numberFish = Number(input[1]) * fish;
    let numberVegi = Number(input[2]) * vegi;
    let desert = (numberChicken + numberFish + numberVegi) * 0.20;

    let price = desert + numberChicken + numberFish + numberVegi + delivery; 

    console.log(`${price}`);

}
food(["9","2","6"])