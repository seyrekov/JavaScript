function zooCosts(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let costFood = dogFood * 2.50 + catFood * 4;
    console.log(`${costFood} lv.`);
}
zooCosts([13,9])