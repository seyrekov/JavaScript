function intervalNumber(input) {
    let theNum = Number(input[0]);
    if (theNum >= -100 && theNum <= 100 && theNum !=0){
        console.log("Yes");
    } else {
        console.log("No");
    } 
}
intervalNumber(["-25"])