function adding(input) {
    // Convert the input to a number
    let n = Number(input[0]);
    
    // Initialize a counter to keep track of the valid combinations
    let counter = 0;
  
    // Loop through all possible values for x1
    for (let x1 = 0; x1 <= n; x1++) {
      // Loop through all possible values for x2
      for (let x2 = 0; x2 <= n; x2++) {
        // Loop through all possible values for x3
        for (let x3 = 0; x3 <= n; x3++) {
          // Calculate the sum of x1, x2, and x3
          let validCombinationsCount = x1 + x2 + x3;
  
          // Check if the sum is equal to n (a valid combination)
          if (validCombinationsCount === n) {
            // If it's a valid combination, increment the counter
            counter += 1;
          }
        }
      }
    }
  
    // Output the final count of valid combinations
    console.log(counter);
  }


//adding(["5"])