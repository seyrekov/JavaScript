function balance(input) {
    let money = 0;
    let index = 0;
    let nums = input[index];
   
    while (nums != "NoMoreMoney") {
        
        if (Number(nums) <= 0) {
            console.log("Invalid operation!");
            break
        } else {
            nums = Number(nums).toFixed(2)
            console.log(`Increase: ${nums}`);
            money += Number(nums)
        }   
        
        index ++;
        nums = input[index];
             
    }
    console.log(`Total: ${money.toFixed(2)}`);
}
/*balance(["120",
"45.55",
"-150"])*/