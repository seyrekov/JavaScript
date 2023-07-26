function table() {
    // Outer loop for the rows (x values from 1 to 10)
    for (let x = 1; x <= 10; x++) {
      // Inner loop for the columns (y values from 1 to 10)
      for (let y = 1; y <= 10; y++) {
        // Calculate and print the multiplication result for current x and y
        console.log(`${x} * ${y} = ${x * y}`);
      }
    }
  }
      
//table()