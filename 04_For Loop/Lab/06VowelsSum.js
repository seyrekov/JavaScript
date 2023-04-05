function vowels(input) {

let vowel = String(input[0]);
let sumNum1 = 0;
let sumNum2 = 0;
let sumNum3 = 0;
let sumNum4 = 0;
let sumNum5 = 0;


for (let i = 0; i <= vowel.length; i++){
    let ourNum = vowel[i]
      
    if (ourNum == "a"){
        sumNum1 +=1;
    } else if (ourNum == "e"){
        sumNum2 +=2;
    } else if (ourNum == "i"){
        sumNum3 +=3;
    } else if (ourNum == "o"){
        sumNum4 +=4;
    } else if (ourNum == "u"){
        sumNum5 +=5;
    }
}
let allSum = sumNum1+sumNum2+sumNum3+sumNum4+sumNum5
console.log(allSum);

}

vowels(["hello"])