function oscars(input) {
    let nameActor = String(input[0]);
    let points = Number(input[1]);
    let evaluators = Number(input[2]);

    let evaluation = points;   
    let nameEvaluator = 0; 
    let evaluatorPoints = 0; 

    for (let index = 3; index < input.length; index+=2) {
        evaluatorPoints = (Number((input[index]).length)) * Number(input[index+1])/2;    
        evaluation += evaluatorPoints;
        
        if (evaluation > 1250.5) {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${evaluation.toFixed(1)}!`);
            break
        }
                 
    } 
    
    let result = Math.abs(evaluation - 1250.5).toFixed(1)
    if (evaluation < 1250.5){
        console.log(`Sorry, ${nameActor} you need ${result} more!`)
        } 
}
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])