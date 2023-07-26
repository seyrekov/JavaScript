function sumNumbers(input) {
    // Extract the startNumber, endNumber, and magicNumber from the input array and convert them to numbers
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
  
    // Initialize a boolean flag to track whether a valid combination is found
    let isFound = false;
  
    // Initialize a counter to keep track of the number of combinations checked
    let counter = 0;
  
    // Loop through all combinations of two numbers between startNumber and endNumber (inclusive)
    for (let i = startNumber; i <= endNumber; i++) {
      for (let y = startNumber; y <= endNumber; y++) {
        // Increment the counter for each combination checked
        counter++;
  
        // Check if the sum of the two numbers (i and y) is equal to the magicNumber
        if (i + y === magicNumber) {
          // If a valid combination is found, print a message and set the isFound flag to true
          console.log(`Combination N:${counter} (${i} + ${y} = ${magicNumber})`);
          isFound = true;
          break; // Exit the inner loop, no need to check further combinations
        }
      }
  
      // Check if a valid combination is found (isFound is true)
      if (isFound) { //code will read isFound as its last value: (true) or (false)
        // If a valid combination is found, exit the outer loop as well
        break;
      }
    }
  
    // Check if a valid combination is not found (isFound is still false)
    if (!isFound) {
      // If no valid combination is found, print a message with the number of combinations checked
      console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
  }

// sumNumbers(["1","10","5"])