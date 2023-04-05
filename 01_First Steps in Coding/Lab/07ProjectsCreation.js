function projects(input) {
    let nameArchitect = input[0];
    let numbersProjects = Number(input[1]);
    let workingHours = numbersProjects * 3;
    console.log(`The architect ${nameArchitect} will need ${workingHours} hours to complete ${numbersProjects} project/s.`);
}
projects(["Sanya",9])