function findPrimeAndNonPrimeSums(input) {
    let primeSum = 0; // Initialize sum for prime numbers
    let nonPrimeSum = 0; // Initialize sum for non-prime numbers
    let index = 0; // Initialize index to start reading input
    let command = input[index]; // Get the first element from input

    while (command !== 'stop') { // Loop until 'stop' command is found
        let number = Number(command); // Convert current element to a number

        if (number < 0) {
            console.log('Number is negative.'); // Print a message if number is negative
        } else if (number === 1) {
            nonPrimeSum += number; // Add number to nonPrimeSum if it's 1
        } else {
            let isPrime = true; // Assume number is prime

            // Check if number is divisible by any number from 2 to its square root
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) { // If divisible, number is not prime
                    isPrime = false;
                    break; // Exit the loop early
                }
            }

            if (isPrime) {
                primeSum += number; // Add number to primeSum if it's prime
            } else {
                nonPrimeSum += number; // Add number to nonPrimeSum if it's not prime
            }
        }

        index++; // Move to the next element in input
        command = input[index]; // Update 'command' for the next iteration
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`); // Print sum of prime numbers
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`); // Print sum of non-prime numbers
}

/*findPrimeAndNonPrimeSums(["0",
"-9",
"0",
"stop"])*/