function godVsKing(input){
    let budget = Number(input[0]);
    let casting  = Number(input[1]);
    let customeOneCast = Number(input[2]);
    let customeCast = casting * customeOneCast
    let environment = budget * 0.10;
     
if (casting > 150){
    customeCast = customeCast * 0.90
}
let neededMoney = environment + customeCast; 
let result = Math.abs(neededMoney - budget)
if (neededMoney <= budget){
    console.log("Action!");
    console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`);
}else {
    console.log("Not enough money!");
    console.log(`Wingard needs ${result.toFixed(2)} leva more.`);
}
    
}
godVsKing(["9587.88","222","55.68"])