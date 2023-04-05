function hotel(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studioNight;
    let aparatamentNight;
    let priceStudio;
    let priceApartament;
    
    switch(month){
        case "May":
        case "October":
            studioNight = 50;
            priceStudio = (nights * studioNight).toFixed(2);
            aparatamentNight = 65;
            priceApartament = (nights * aparatamentNight).toFixed(2);
            if (nights > 7 && nights <= 14){
                priceStudio = (priceStudio * 0.95).toFixed(2);
            } else if (nights > 14){
                priceStudio = (priceStudio * 0.70).toFixed(2);
                priceApartament = (priceApartament * 0.90).toFixed(2);     
            }
            break;
        case "June":
        case "September":
            studioNight = 75.20;
            priceStudio = (nights * studioNight).toFixed(2);
            aparatamentNight = 68.70;
            priceApartament = (nights * aparatamentNight).toFixed(2);
            if (nights > 14){
                priceStudio = (priceStudio * 0.80).toFixed(2);
                priceApartament = (priceApartament * 0.90).toFixed(2);
            } break;
        case "July":
        case "August":
            studioNight = 76;
            priceStudio = (nights * studioNight).toFixed(2);
            aparatamentNight = 77;
            priceApartament = (nights * aparatamentNight).toFixed(2);
            if (nights > 14){
                priceApartament = (priceApartament * 0.90).toFixed(2);
            }
            break;
      
    
    }
    console.log(`Apartment: ${priceApartament} lv.`);
    console.log(`Studio: ${priceStudio} lv.`);
}
hotel(["August","20"])

