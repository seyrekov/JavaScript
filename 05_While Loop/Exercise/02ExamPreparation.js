function examResults(input) {
    let poorGradesThreshold = Number(input.shift()); // Get the number of poor grades allowed
    let goodGradesCount = 0; // Number of good grades
    let poorGradesCount = 0; // Number of poor grades
    let totalScore = 0; // Total score of all problems
    let lastProblem = ""; // Name of the last problem
  
    while (poorGradesCount < poorGradesThreshold) {
      let problemName = input.shift(); // Get the name of the problem
      if (problemName === "Enough") {
        break; // Stop the loop if "Enough" is entered
      }
  
      let grade = Number(input.shift()); // Get the grade for the problem
      totalScore += grade; // Add the grade to the total score
      goodGradesCount++; // Increment the number of good grades
  
      lastProblem = problemName; // Update the last problem
  
      if (grade <= 4) {
        poorGradesCount++; // Increment the number of poor grades
      }
    }
  
    // Calculate the average score
    const averageScore = (totalScore / goodGradesCount).toFixed(2);
  
    // Check if enough poor grades have been reached
    if (poorGradesCount === poorGradesThreshold) {
      console.log(`You need a break, ${poorGradesCount} poor grades.`);
    } else {
      // Print the result
      console.log(`Average score: ${averageScore}`);
      console.log(`Number of problems: ${goodGradesCount}`);
      console.log(`Last problem: ${lastProblem}`);
    }
  }


  // Example usages
  //examResults(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
  //examResults(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);