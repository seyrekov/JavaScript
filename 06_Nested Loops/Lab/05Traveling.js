function traveling(input) {
    let index = 0; // Initialize the index to start reading the input from the beginning
    let destination = input[index++]; // Read the first destination from the input and move the index to the next position
    let budget = Number(input[index++]); // Read the budget for the first destination from the input and move the index to the next position
  
    while (destination !== "End") { // Loop until the input indicates the end of destinations
      let savings = 0; // Initialize the savings to 0 for each destination
  
      while (savings < budget) { // Loop until enough savings are collected for the current destination
        savings += Number(input[index++]); // Add the savings amount from the input to the current savings and move the index to the next position
      }
  
      console.log(`Going to ${destination}!`); // Print the message for traveling to the current destination
  
      destination = input[index++]; // Read the next destination from the input and move the index to the next position
      budget = Number(input[index++]); // Read the budget for the next destination from the input and move the index to the next position
    }
  }

/*traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])*/