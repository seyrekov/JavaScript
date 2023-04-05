function books(input) {
   taskPages = Number(input[0]);
   pagesforOneHour = Number(input[1]);
   hours = taskPages / pagesforOneHour;
   numberDays = Number(input[2]);
   finalHours = ( hours / numberDays);
   console.log(finalHours);
}
books(["432","15","4"])