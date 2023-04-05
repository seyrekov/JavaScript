function nums(input) {
    let theNum = Number(input[0]);
    for (let index = 1; index <= 10; index++) {
        let ourNum = theNum;
            console.log(`${index} * ${theNum} = ${index*theNum}`);
        
    }
}
nums(["5"])