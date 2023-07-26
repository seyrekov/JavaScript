function EqualOrOdd(input) {
    // Parse the first and second numbers from the input array
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    // Initialize an empty string to store the result
    let result = '';

    // Loop through numbers from firstNum to secondNum (inclusive)
    for (let i = firstNum; i <= secondNum; i++) {
        // Convert the current number to a string to calculate its digits' sum
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        // Loop through the digits of the current number
        for (let j = 0; j < currentNum.length; j++) {
            // Convert the current digit back to a number
            let currentDigit = Number(currentNum.charAt(j));
            
            // Check if the position of the digit is even or odd and update the respective sum
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        // Check if the sum of digits at even and odd positions is equal
        if (oddSum === evenSum) {
            // If the condition is met, add the current number to the result string
            result += i + ' ';
        }
    }

    // Print the result, trimming any leading or trailing spaces
    console.log(result.trim());
}

//EqualOrOdd(["100000","100050"])
