function stepsToGoal(input) {
    const goal = 10000; // Set the goal to 10000 steps
    let stepsTaken = 0; // Variable to keep track of the steps taken
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "Going home") {
        // Check if the input is "Going home"
        i++; // Move to the next element to get the steps taken while going home
        stepsTaken += Number(input[i]); // Add the steps taken while going home
        break; // Exit the loop since we reached home
      }
  
      stepsTaken += Number(input[i]); // Add the steps taken
    }
  
    if (stepsTaken >= goal) {
      // Check if the goal is reached or exceeded
      const stepsOverGoal = stepsTaken - goal;
      console.log("Goal reached! Good job!");
      console.log(`${stepsOverGoal} steps over the goal!`);
    } else {
      const stepsNeeded = goal - stepsTaken;
      console.log(`${stepsNeeded} more steps to reach goal.`);
    }
  }
  
 // Example usage with the given input 1
 // stepsToGoal(["1000", "1500", "2000", "6500"]);
  
 // Example usage with the given input 2
 /* stepsToGoal(["125",
  "250",
  "4000",
  "30",
  "2678",
  "4682"]);*/