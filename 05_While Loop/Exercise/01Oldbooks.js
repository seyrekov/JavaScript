function findFavoriteBook(input) {
    // Extract the favourite book from the input array
    let favouriteBook = input[0];
  
    // Initialize variables to keep track of book search
    let index = 1;
    let bookIsfound = false;
    let nextBookName = input[index];
  
    // Start searching for the favourite book
    while (nextBookName !== "No More Books") {
      // Check if the current book is the favourite book
      if (nextBookName === favouriteBook) {
        bookIsfound = true;
        break;
      }
  
      // Move to the next book
      index++;
      nextBookName = input[index];
    }
  
    // Check if the favourite book is found or not
    if (bookIsfound === false) {
      // Print the message when the book is not found
      console.log("The book you search is not here!");
      console.log(`You checked ${index - 1} books.`);
    } else {
      // Print the message when the book is found
      console.log(`You checked ${index - 1} books and found it.`);
    }
  }
  
  // Example usage with different inputs
/*findFavoriteBook(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]);*/