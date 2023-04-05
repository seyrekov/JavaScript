function weekDay(input) {
    let theDay = Number(input[0]);
    switch (theDay) {
        case 1: console.log("Monday");        
            break;
        case 2: console.log("Tuesday");         
            break;
        case 3: console.log("Wednesday");         
            break;
        case 4: console.log("Thursday");         
            break;
        case 5: console.log("Friday");         
            break;
        case 6: console.log("Saturday");         
            break;
        case 7: console.log("Sunday");         
            break;
        default: console.log("Error");
            break;
    }
}
weekDay(["1"])
/*
weekDay(["2"])
weekDay(["3"])
weekDay(["4"])
weekDay(["5"])
weekDay(["6"])
weekDay(["7"])
weekDay(["-1"])

*/