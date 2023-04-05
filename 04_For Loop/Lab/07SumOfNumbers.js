function ourSum(input){
let theNum = input[0];
let sum = 0;
let num = 0;
    for (let i = 0; i < theNum.length;i++) {
        num = Number(theNum[i]);
        sum += num;
        
    }
    console.log(`The sum of the digits is:${sum}`);
}
ourSum(["564891"])