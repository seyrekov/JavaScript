function calculator(input) {
    let deposit = Number(input[0]); 
    let termDeposit = Number(input[1]);
//calculate annualPercentage for our deposit like number:
    let annualPercentage = Number(input[2])/100; 
//(deposit * annualPercentage)/12 is annualPercentage for one month:
    count = deposit + termDeposit * ((deposit * annualPercentage)/12);
    console.log(count);
}
calculator(["2350","6","7"])