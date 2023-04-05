function trip(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination
    let vacancyType
    let cost 
   
    switch(season){
        case "summer": 
            vacancyType = "Camp"; 
            if (budget > 1000) {
                vacancyType = "Hotel";
                destination = "Europe";
                cost = (budget * 0.90).toFixed(2);
            }else if(budget <= 1000 && budget > 100){
                destination = "Balkans";
                cost = (budget * 0.40).toFixed(2);
            }else if (budget <= 100){
                destination = "Bulgaria";
                cost = (budget * 0.30).toFixed(2);
            };
        break;
        case "winter":
            vacancyType = "Hotel"; 
            if (budget > 1000) {
                vacancyType = "Hotel";
                destination = "Europe";
                cost = (budget * 0.90).toFixed(2);
            }else if(budget <= 1000 && budget > 100){
                destination = "Balkans";
                cost = (budget * 0.80).toFixed(2);
            }else if (budget <= 100){
                destination = "Bulgaria";
                cost = (budget * 0.70).toFixed(2);
            };
        break;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${vacancyType} - ${cost}`);
}
trip(["1500","summer"])