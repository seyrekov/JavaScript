function bulding(input) {
    let y = Number(input[0]); // Parse the first input as y
    let x = Number(input[1]); // Parse the second input as x
  
    for (let i = y; i > 0; i--) {
      // Loop from y to 1, in reverse order
      let buff = ""; // Initialize an empty string to store the output for the current row
  
      for (let z = 0; z < x; z++) {
        // Loop from 0 to x-1
        if (i === y) {
          // If i is equal to y (the first row)
          buff += `L${i}${z} `; // Append "L" followed by the current i and z value to the buffer
        } else if (i % 2 === 0) {
          // If i is even
          buff += `O${i}${z} `; // Append "O" followed by the current i and z value to the buffer
        } else {
          // If i is odd
          buff += `A${i}${z} `; // Append "A" followed by the current i and z value to the buffer
        }
      }
  
      console.log(buff); // Print the contents of the buffer for the current row
    }
  }

//bulding()