function training(input) {
    let n = Number(input[0]); // Get the number of grades to be read for each student
    let index = 1; // Initialize the index variable to start reading the input from the second element
    let command = input[index]; // Get the first student's name
    let sumGrades = 0; // Initialize the variable to store the sum of average grades of all students
    let counter = 0; // Initialize the variable to count the number of students processed

    while (command !== 'Finish') { // Continue the loop until the 'Finish' command is encountered
      counter++; // Increment the counter to keep track of the number of students
      let name = command; // Store the current student's name
      let tempSumGrade = 0; // Initialize the variable to store the sum of grades for the current student

      for (let i = 0; i < n; i++) { // Loop to read 'n' grades for the current student
        index++; // Move to the next input element to read the grade
        let grade = Number(input[index]); // Convert the input to a number (grade)
        tempSumGrade += grade; // Add the grade to the temporary sum for the current student
      }

      let tempAvgGrade = tempSumGrade / n; // Calculate the average grade for the current student
      sumGrades += tempAvgGrade; // Add the average grade of the current student to the total sum of grades

      console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`); // Print the current student's name and their average grade
        
      index++; // Move to the next input element to read the next student's name or the 'Finish' command
      command = input[index]; // Update the value of 'command' for the next iteration of the loop
    }  

    let avgGrade = sumGrades / counter; // Calculate the overall average grade for all students
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`); // Print the final average grade
}
 
    

/*training(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])*/