function shopping(input){
    let penPacks = 5.80; 
    let markersPacks = 7.20;
    let litterliquid = 1.20;

    let valuePensPacks = Number(input[0]) * penPacks;
    let valuesMarkersPacks = Number(input[1]) * markersPacks;
    let valuelitersLiquid = Number(input[2]) * litterliquid;
    let money = valuePensPacks + valuesMarkersPacks + valuelitersLiquid;
    let discount = money * Number(input[3]) / 100;
    let price = money - discount;
    console.log(price);
}
shopping(["4","2","5","13"])