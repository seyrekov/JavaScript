function calculateChange(input) {
    let amountChange = Number(input[0]); // Get the amount of change needed from the input
    let remainingAmount = Math.floor(amountChange * 100); // Convert the amount to cents
    let numCoins = 0; // Initialize the number of coins to 0
  
    while (remainingAmount > 0) {
      if (remainingAmount >= 200) {
        remainingAmount -= 200; // Subtract the value of the coin from the remaining amount
        numCoins++; // Increment the number of coins used
      } else if (remainingAmount >= 100) {
        remainingAmount -= 100;
        numCoins++;
      } else if (remainingAmount >= 50) {
        remainingAmount -= 50;
        numCoins++;
      } else if (remainingAmount >= 20) {
        remainingAmount -= 20;
        numCoins++;
      } else if (remainingAmount >= 10) {
        remainingAmount -= 10;
        numCoins++;
      } else if (remainingAmount >= 5) {
        remainingAmount -= 5;
        numCoins++;
      } else if (remainingAmount >= 2) {
        remainingAmount -= 2;
        numCoins++;
      } else if (remainingAmount >= 1) {
        remainingAmount -= 1;
        numCoins++;
      }
    }
  
    console.log(numCoins); // Display the result here
  }
  
// Example inputs and testing the function with them
//calculateChange(["1.23"]); // Output: 4
//calculateChange(["2"]); // Output: 1
//calculateChange(["0.56"]); // Output: 3
//calculateChange(["2.73"]); // Output: 5