function shopper(input) {
    let budget = Number(input[0]);
    let video = Number(input[1]);
    let cpus = Number(input[2]);
    let ram = Number(input[3]);

    let videoPrice = video * 250;
    let cpusPrice = (videoPrice * 0.35) * cpus;
    let ramPrice = (videoPrice * 0.10) * ram;
    let cost = videoPrice + cpusPrice + ramPrice

if (video > cpus){
    cost = cost * 0.85
}
    let sumOrder = Math.abs(budget - cost).toFixed(2)

if (budget >= cost) {
    console.log(`You have ${sumOrder} leva left!`);
} else {
    console.log(`Not enough money! You need ${sumOrder} leva more!`);
}
}
shopper(["920.45","3","1","1"])