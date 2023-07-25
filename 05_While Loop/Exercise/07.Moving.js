function moving(input) {
    // Get the dimensions of the space (width, length, height) from the input
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
  
    // Calculate the free space available in the room
    let freeSpace = width * length * height;
  
    // Start from index 3 of the input array as the first three elements are the dimensions
    let index = 3;
    
    // Get the first command from the input array
    let command = input[index];
  
    // Iterate over the commands until 'Done' is encountered
    while (command !== 'Done') {
      // Get the number of boxes to be moved from the command and convert it to a number
      let numberBoxes = Number(command);
      
      // Reduce the free space by the number of boxes
      freeSpace -= numberBoxes;
  
      // If there is not enough free space, print the message and break out of the loop
      if (freeSpace < 0) {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
        break;
      }
  
      // Move to the next command in the input array
      index++;
      command = input[index];
    }
  
    // If there is still free space after processing all commands, print the message
    if (freeSpace >= 0) {
      console.log(`${freeSpace} Cubic meters left.`);
    }
  }

/*moving(["10",
"10",
"2",
"20",
"20",
"20",
"20",
"122"])*/
