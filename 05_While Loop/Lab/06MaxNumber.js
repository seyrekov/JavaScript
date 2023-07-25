function max(input) {
    let index = 0;
    let num = input[index];
    index++;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (num != "Stop") {
        let numUp = Number(num);
        
        if (numUp > maxNum) {
            maxNum = numUp  
        } 
        num = input[index];
        index++;             
    }
    console.log(maxNum);
}
/*max(["999",
"Stop"])*/