function letters(input) {
    let ourString = String(input[0]);
   
    for ( let index = 0; index < ourString.length; index++){
        let i = ourString[index];
        console.log(i);
    }
}
letters(["ice cream"])