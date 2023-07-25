function sum(input) {
    let num = Number(input[0]);

    let index = 1;
    let counting = Number(input[index]);
    index++
    
    while (counting < num) {
        
        counting += Number(input[index]);
        index++;    
        
    }
    console.log(counting);
}
/*sum(["20",
"1",
"2",
"3",
"4",
"5",
"6"])*/