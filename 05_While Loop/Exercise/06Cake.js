function cake(input) {
    // Get the dimensions of the cake (length and width) from the input
    let length = Number(input[0]);
    let width = Number(input[1]);
  
    // Calculate the total size of the cake
    let cakeSize = length * width;
  
    // Start from index 2 of the input array as the first two elements are the dimensions
    let index = 2;
  
    // Get the first command from the input array
    let command = input[index];
  
    // Initialize a variable to keep track of the number of cake pieces
    let pieces = 0;
  
    // Iterate over the commands until 'STOP' is encountered
    while (command !== 'STOP') {
      // Get the number of cake pieces to be taken from the command and convert it to a number
      let cakeNumber = Number(command);
      
      // Add the number of cake pieces to the total pieces count
      pieces += cakeNumber;
  
      // If the total number of cake pieces taken exceeds the cake size, print a message and break out of the loop
      if (pieces > cakeSize) {
        console.log(`No more cake left! You need ${pieces - cakeSize} pieces more.`);
        break;
      }
  
      // Move to the next command in the input array
      index++;
      command = input[index];
    }
  
    // If the command is 'STOP' and there is still cake left, print the message
    if (command === 'STOP') {
      if (pieces <= cakeSize) {
        console.log(`${cakeSize - pieces} pieces are left.`);
      }
    }
  } 

/*cake(["10",
"2",
"2",
"4",
"6",
"STOP"])*/