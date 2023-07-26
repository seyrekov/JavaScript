function numbers(input) {
    let n = Number(input[0]); // Parse the input to get the value of n
    let current = 1; // Initialize the current number to 1
    let isBigger = false; // Flag to track if the current number exceeds n
    let printCurrentLine = ""; // String to store the numbers to be printed in the current line

    // Outer loop to handle rows of the pyramid
    for (let rows = 1; rows <= n; rows++) {
        // Inner loop to handle numbers in each row
        for (let cols = 1; cols <= rows; cols++) {
            // Check if the current number exceeds n
            if (current > n) {
                isBigger = true; // If yes, set the flag to true and break out of the inner loop
                break;
            }
            printCurrentLine += current + " "; // Append the current number to the line to be printed
            current++; // Move to the next number
        }
        console.log(printCurrentLine); // Print the current line of numbers
        printCurrentLine = ""; // Reset the line to be printed for the next row

        // Check if the flag is true (current number exceeds n)
        if (isBigger) {
            break; // If yes, break out of the outer loop
        }
    }
}

//numbers(["15"])