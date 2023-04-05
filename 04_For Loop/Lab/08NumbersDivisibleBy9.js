function nums(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    let buff = ""
    //console.log(`The sum: ${sum}`);
    for (i = num1; i <= num2; i+=1){
        if (i % 9 == 0){
            sum +=i;
            buff += `${i}\n`;
        } 
    }
    console.log(`The sum: ${sum}`);
    console.log(buff);

    
}
nums(["100","200"])