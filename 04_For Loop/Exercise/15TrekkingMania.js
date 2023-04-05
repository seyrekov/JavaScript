function mania(input) {
    let climberGroups = Number(input[0]);
    let people = 0;
       
    let numClimbers1 = 0;
    let numClimbers2 = 0;
    let numClimbers3 = 0;
    let numClimbers4 = 0;
    let numClimbers5 = 0;
    let mountain1 = "";
    let mountain2 = "";
    let mountain3 = "";
    let mountain4 = "";
    let mountain5 = "";

    for (let index = 1; index <= climberGroups; index++) {
        people = input[index];
        if (people <= 5){
            mountain1 = "Мусала";
            numClimbers1 += Number(people);
        } else if (people >= 6 && people <= 12) {
            mountain2 = "Монблан";
            numClimbers2 += Number(people);
        } else if (people >= 13 && people <= 25){
            mountain3 = "Килиманджаро";
            numClimbers3 += Number(people);
        } else if (people >= 26 && people <= 40) {
            mountain4 = "К2";
            numClimbers4 += Number(people);
        } else {
            mountain5 = "Еверест";
            numClimbers5 += Number(people);
        }
        
    }

    let allClimbers = numClimbers1 + numClimbers2 + numClimbers3 + numClimbers4 + numClimbers5
    
    console.log((numClimbers1 / allClimbers * 100).toFixed(2) + "%");
    console.log((numClimbers2 / allClimbers * 100).toFixed(2) + "%");
    console.log((numClimbers3 / allClimbers * 100).toFixed(2) + "%");
    console.log((numClimbers4 / allClimbers * 100).toFixed(2) + "%");
    console.log((numClimbers5 / allClimbers * 100).toFixed(2) + "%");
}
mania(["5",
"25",
"41",
"31",
"250",
"6"])
