function timing(input) {
let hours = Number(input[0]) * 60;
let minutes = Number(input[1]);
let theTime = hours + minutes + 15;

let newHours = Math.floor(theTime / 60);
let newMinutes = theTime % 60;

if (newHours > 23) {
    newHours = 0
    if(newMinutes < 10){
        console.log(`${newHours}:0${newMinutes}`);
    }else{
        console.log(`${newHours}:${newMinutes}`);
    }
}else {
    if(newMinutes < 10){
        console.log(`${newHours}:0${newMinutes}`);
    }else{
        console.log(`${newHours}:${newMinutes}`);
    }
}

}
timing(["12","49"])