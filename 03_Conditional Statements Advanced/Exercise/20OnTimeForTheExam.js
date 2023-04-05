function exam(input) {
  let hour = Number(input[0]);
  let min = Number(input[1]);
  let hourCome = Number(input[2]);
  let minCome = Number(input[3]);
  let time = hour * 60 + min;
  let timeCome = hourCome * 60 + minCome;

  let resultEarly;
  let resultLate;
  let resEarlyH;
  let resEarlyMin;
  let resLateH;
  let resLateMin;

  if (time == timeCome) {
    console.log("On time");
  } 
  else if (time > timeCome) {
    resultEarly = time - timeCome;
    if (resultEarly > 30) {
      console.log("Early");
    } else {
      console.log("On time");
    }
    if (resultEarly >= 60) {
      resEarlyH = Math.floor(resultEarly / 60);
      resEarlyMin = resultEarly % 60;
      if (resEarlyMin < 10) {
        console.log(`${resEarlyH}:0${resEarlyMin} hours before the start`);
      } else {
        console.log(`${resEarlyH}:${resEarlyMin} hours before the start`);
      }
    } else {
      console.log(`${resultEarly} minutes before the start`);
    }
  } 
  else if (time < timeCome) {
    resultLate = timeCome - time;
    console.log("Late");

    if (resultLate >= 60) {
      resLateH = Math.floor(resultLate / 60);
      resLateMin = resultLate % 60;
      if (resLateMin < 10) {
        console.log(`${resLateH}:0${resLateMin} hours after the start`);
      } else {
        console.log(`${resLateH}:${resLateMin} hours after the start`);
      }
    } else {
      console.log(`${resultLate} minutes after the start`);
    }
  }
}
exam(["11", "30", "12", "29"]);
