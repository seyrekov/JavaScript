function pass(input) {
  let name = input[0];
  let password = input[1];

  let index = 2;
  let yourPass = input[index];
  index++;

  while (yourPass != password) {
    yourPass = input[index];
    index++;
  }

  console.log(`Welcome ${name}!`);
}
//pass(["Gosho", "secret", "secret"]);
