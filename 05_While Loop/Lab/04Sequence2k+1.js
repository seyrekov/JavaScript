function digits(input) {
  let n = Number(input[0]);
  let theNum = 1;

  while (theNum <= n) {
    console.log(theNum);
    theNum = theNum * 2 + 1;
  }
}
//digits(["31"]);
