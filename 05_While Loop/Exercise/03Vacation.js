function vacationSaving(input) {
    let neededMoney = Number(input.shift()); // Get the needed money for the vacation
    let availableMoney = Number(input.shift()); // Get the initial available money
    let daysCounter = 0; // Variable to count the number of days
    let consecutiveSpendDays = 0; // Variable to count the consecutive spend days
  
    while (availableMoney < neededMoney) {
      let action = input.shift(); // Get the action (spend or save)
      let amount = Number(input.shift()); // Get the amount to spend or save
  
      daysCounter++; // Increment the number of days
  
      if (action === "spend") {
        availableMoney -= amount; // Subtract the amount from available money
        consecutiveSpendDays++; // Increment the consecutive spend days
      } else if (action === "save") {
        availableMoney += amount; // Add the amount to available money
        consecutiveSpendDays = 0; // Reset the consecutive spend days
      }
  
      if (availableMoney < 0) {
        availableMoney = 0; // If available money goes below 0, set it to 0
      }
  
      if (consecutiveSpendDays === 5) {
        // Check if there are 5 consecutive spend days
        console.log("You can't save the money.");
        console.log(daysCounter);
        return;
      }
    }
  
    // If enough money is saved, print the result
    console.log(`You saved the money for ${daysCounter} days.`);
  }
  
  // Example usage with the given input
  /*vacationSaving(["250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100"]);*/