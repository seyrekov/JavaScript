/*function summer(input) {
    let gradius = Number(input[0]);
    let weather = input[1];
    let outfit;
    let shoes ;

    switch(weather){
        case "Morning": 
        if (gradius >= 10 && gradius <= 18){
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }else if (gradius >= 18 && gradius <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }else if (gradius >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        break;
        case "Afternoon": 
        if (gradius >= 10 && gradius <= 18){
            outfit = "Shirt";
            shoes = "Moccasins";
        }else if (gradius >= 18 && gradius <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }else if (gradius >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
        break; 
        case "Evening": 
        if (gradius >= 10 && gradius <= 18){
            outfit = "Shirt";
            shoes = "Moccasins";
        }else if (gradius >= 18 && gradius <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }else if (gradius >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        break;
        default: break;
    }

    console.log(`It's ${gradius} degrees, get your ${outfit} and ${shoes}.`)
}
summer(["28", "Evening"])*/


function summer(input) {
    let gradius = Number(input[0]);
    let weather = input[1];
    let outfit;
    let shoes ;

    if (weather == "Morning"){ 
        if (gradius >= 10 && gradius <= 18){
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }else if (gradius >= 18 && gradius <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }else if (gradius >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (weather == "Afternoon") {
        if (gradius >= 10 && gradius <= 18){
            outfit = "Shirt";
            shoes = "Moccasins";
        }else if (gradius >= 18 && gradius <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }else if (gradius >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    }else if (weather == "Evening") { 
        if (gradius >= 10 && gradius <= 18){
            outfit = "Shirt";
            shoes = "Moccasins";
        }else if (gradius >= 18 && gradius <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }else if (gradius >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
        
    console.log(`It's ${gradius} degrees, get your ${outfit} and ${shoes}.`)
}
summer(["28", "Evening"])