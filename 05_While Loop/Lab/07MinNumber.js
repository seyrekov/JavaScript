function min(input) {
    let index = 0;
    let num = input[index];
    index++;
    let minNum = Number.MAX_SAFE_INTEGER;

    while (num != "Stop") {
        let numUp = Number(num);
        
        if (numUp < minNum) {
            minNum = numUp  
        } 
        num = input[index];
        index++;             
    }
    console.log(minNum);
}
/*min(["-1",
"-2",
"Stop"])*/