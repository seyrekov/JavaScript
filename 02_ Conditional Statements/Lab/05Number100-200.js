function seeNumber(input) {
    let ourNumber = input[0];
    if (ourNumber < 100){
        console.log("Less than 100");
    } else if (ourNumber >= 100) {
        if (ourNumber <=200){
            console.log("Between 100 and 200");
        } else {
            console.log("Greater than 200");
        }
    }
}
seeNumber(["210"])