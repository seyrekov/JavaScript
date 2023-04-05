function skiing(input) {
  let days = Number(input[0]);
  let room = input[1];
  let posNeg = input[2];
  let night;
  let nights = days - 1;
  let price;
  let positive;

  switch (room) {
    case "room for one person":
      night = 18;
      price = nights * 18;
      break;
    case "apartment":
      night = 25;
      price = nights * 25;
      if (days < 10) {
        price = price * 0.7;
      } else if (days >= 10 && days <= 15) {
        price = price * 0.65;
      } else {
        price = price * 0.5;
      }
      break;
    case "president apartment":
      night = 35;
      price = nights * 35;
      if (days < 10) {
        price = price * 0.9;
      } else if (days >= 10 && days <= 15) {
        price = price * 0.85;
      } else {
        price = price * 0.8;
      }
      break;
  }
  switch (posNeg) {
    case "positive":
      positive = (price * 0.25).toFixed(2);
      price = (Number(price) + Number(positive)).toFixed(2)
      break;
    case "negative":
      price = (price * 0.9).toFixed(2);
      break;
  }

  console.log(`${price}`);
}

skiing(["12", "room for one person", "positive"]);
