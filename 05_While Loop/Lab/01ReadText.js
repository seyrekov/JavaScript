function words(input) {
    let index = 0
    let ourWord = input[index];
    index++
    while (ourWord !== "Stop" ) {
        console.log(ourWord);
        ourWord = input[index];
        index++
    }
    
}

/*words(["Sofia", 
"Berlin", 
"Moscow", 
"Athens", 
"Madrid", 
"London", 
"Paris", 
"Stop",
"AfterStop"])*/