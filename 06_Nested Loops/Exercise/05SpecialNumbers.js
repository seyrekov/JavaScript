function specialNumbers(input) {
    // Get the number from the input array and convert it to a number type
    let number = Number(input[0]);
    
    // Initialize an empty string to store the result
    let result = '';

    // Use four nested loops to generate all possible combinations of four digits (each from 1 to 9)
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    // Check if the number is divisible by each of the four digits
                    if (number % i === 0 && 
                        number % j === 0 &&
                        number % k === 0 &&
                        number % l === 0) {
                        // If the number is divisible by all four digits, add the combination to the result string
                        result += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }

    // Print the result string containing all the special number combinations
    console.log(result);
}

//specialNumbers(["3"])