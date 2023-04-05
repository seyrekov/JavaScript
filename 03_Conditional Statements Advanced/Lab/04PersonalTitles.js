function ageSex(input) {
    let age = Number(input[0]);
    let ageSex = input[1];
    if (ageSex == "m"){
        if (age >= 16) {
            console.log("Mr."); 
        }else{
            console.log("Master");   
        }
    } else {
        if (age >= 16) {
            console.log("Ms.");
        }else{
            console.log("Miss");
        }
    }
}
ageSex(["13.5","m"])