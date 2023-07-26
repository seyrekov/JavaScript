function tickets(input) {
    // Initialize variables to keep track of ticket counts and total tickets sold
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let totalTicketsCounter = 0;

    // Initialize index to keep track of the current position in the input array
    let index = 0;

    // Get the first command from the input array
    let command = input[index];

    // Loop until the 'Finish' command is encountered
    while (command !== 'Finish') {
        // Read the movie name and the number of free spaces for the current movie
        let name = command; 
        index++;
        let freeSpaces = Number(input[index]);
        index++;

        // Initialize ticketCounter to count the number of tickets sold for the current movie
        let ticketCounter = 0;

        // Read the type of the ticket for the current movie
        let ticketType = input[index];

        // Loop until the 'End' command is encountered for the current movie
        while (ticketType !== 'End') {
            // Increment the ticketCounter and the corresponding ticket type counter based on the ticket type
            ticketCounter++;
            switch (ticketType) {
                case 'student':
                    studentCounter++;
                    break;
                case 'standard':
                    standardCounter++;
                    break;
                case 'kid':
                    kidCounter++;
                    break;
            }

            // If the number of tickets sold reaches the number of free spaces, exit the loop
            if (ticketCounter >= freeSpaces) {
                break;
            }

            // Move to the next ticket type
            index++;
            ticketType = input[index];
        }

        // Add the number of tickets sold for the current movie to the total ticket counter
        totalTicketsCounter += ticketCounter;

        // Calculate the percentage of occupancy for the current movie and display the result
        let resultSingleFilm = (ticketCounter / freeSpaces * 100).toFixed(2);
        console.log(`${name} - ${resultSingleFilm}% full.`);

        // Move to the next movie command
        command = input[++index];
    }

    // Display the total number of tickets sold and the percentage of each ticket type
    console.log(`Total tickets: ${totalTicketsCounter}`);
    console.log(`${(studentCounter / totalTicketsCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / totalTicketsCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalTicketsCounter * 100).toFixed(2)}% kids tickets.`);
}

/*tickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])*/

