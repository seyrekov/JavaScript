function clock() {
    // Outer loop for hours, runs from 0 to 23 (inclusive)
    for (let h = 0; h <= 23; h++) {
      // Inner loop for minutes, runs from 0 to 59 (inclusive)
      for (let m = 0; m <= 59; m++) {
        // Output the current time (hour and minute) in the format "hh:mm"
        console.log(`${h}:${m}`);
      }
    }
  }
  
  // Call the clock() function to print all the minutes in a day

//clock();
