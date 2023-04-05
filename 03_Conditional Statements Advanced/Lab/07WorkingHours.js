function workTime(input){
    let clockHour = Number(input[0]);
    let dayName = input[1];
    if (clockHour >= 10 && clockHour <= 18){
        switch (dayName) {
        case "Monday":;
        case "Tuesday":;
        case "Wednesday":;
        case "Thursday":;
        case "Friday": ;
        case "Saturday":console.log("open"); break;
        default: console.log("closed");
        }
    } else {
        console.log("closed"); 
    }
}
workTime(["11","Sunday"])