function equipment(input) {
    let snickers = Number(input) - (Number(input) * 0.40);
    let equipe = snickers - (snickers * 0.20);
    let ball = equipe / 4;
    let basketStuff = ball / 5;
    let cost = snickers + equipe + ball + basketStuff + Number(input);
    console.log(cost);
}
equipment("550")