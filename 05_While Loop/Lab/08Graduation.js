function graduate(input) {
  let index = 0;
  let name = input[index];
  index++;
  let average = Number(input[index]);
  index++;
  let classUp = 0;
  let classEx = 0;
  let averageAll = average;
  
  while (classUp <= 12) {
   
    if (average < 4) {
      classEx += 1;
      if (classEx > 1) {
        break
      }
      average = Number(input[index]);
      index++;
      continue
    } 
    classUp += 1;
    if (classUp == 12){
      averageAll = Number(averageAll / 12);
      console.log(`${name} graduated. Average grade: ${averageAll.toFixed(2)}`);
      break
    }
    
    average = Number(input[index]);
    index++;
    averageAll += average;
    }
  
  if (classEx > 1) {
    console.log(`${name} has been excluded at ${classUp + 1} grade`);
  } 
}
/*graduate(["Gosho",
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])*/


function graduate(input) {
  let index = 0;
  let name = input[index];
  index++;
  
  let studentOut = false;
  let averageAll = 0;
  let classEx = 0;
  let classUpCount = 1;
  let averageTemp = 0;
    
  while (classUpCount <= 12) {
      averageTemp = Number(input[index]);
      index++;

      if (averageTemp < 4) {
          classEx += 1;
          if (classEx > 1) {
              studentOut = true;
              console.log(`${name} has been excluded at ${classUpCount} grade`);
              break;
          }
          continue;
      } 
    averageAll += averageTemp;
    classUpCount += 1 ;
    } 

    if (!studentOut){
      let sumScore = averageAll / 12;
      console.log(`${name} graduated. Average grade: ${sumScore.toFixed(2)}`);
    }
}

/*graduate(["Gosho",
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])*/
