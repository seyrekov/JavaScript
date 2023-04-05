function newHome(input) {
    let typeFlowers = input[0];
    let numberFlowers = Number(input[1]);
    let budget = Number(input[2]);
    
    let Roses = 5;
    let Dahlias = 3.80;
    let Tulips = 2.80;
    let Narcissus = 3;
    let Gladiolus = 2.50;

    let familyCost;
    let result;
    switch (typeFlowers) {
        case "Roses": 
            if (numberFlowers > 80 ){
                familyCost = (numberFlowers * Roses) * 0.90
            }else{
                familyCost = numberFlowers * Roses
            }
        break;
        case "Dahlias":
            if (numberFlowers > 90 ){
                familyCost = (numberFlowers * Dahlias) * 0.85
            }else{
                familyCost = numberFlowers * Dahlias
            } 
        break;
        case "Tulips": 
            if (numberFlowers > 80 ){
                familyCost = (numberFlowers * Tulips) * 0.85
            }else{
                familyCost = numberFlowers * Tulips
            }
        break;
        case "Narcissus": 
            if (numberFlowers < 120 ){
                familyCost = (numberFlowers * Narcissus)+((numberFlowers * Narcissus) * 0.15)
            }else{
                familyCost = numberFlowers * Narcissus
            }
        break;
        case "Gladiolus": 
            if (numberFlowers < 80 ){
                familyCost = (numberFlowers * Gladiolus)+((numberFlowers * Gladiolus) * 0.20)
            }else{
                familyCost = numberFlowers * Gladiolus
            }
        break;
        default: break;
    }
    result = Math.abs(budget-familyCost).toFixed(2)

    if (budget >= familyCost) {
        console.log(`Hey, you have a great garden with ${numberFlowers} ${typeFlowers} and ${result} leva left.`);
    }else{
        console.log(`Not enough money, you need ${result} leva more.`);
    }
}
newHome(["Gladiolus","64","160"])