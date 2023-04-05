function aquarium(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);

    let height = Number(input[2]);
    let aquariumV = lenght * width * height; // V = a*b*c

    let percentage = (aquariumV * Number(input[3])) / 100 ;
    let litters = (aquariumV - percentage) / 1000; //1 dm3 = 1000 cm3
    console.log(litters);
}
aquarium(["105","77","89","18.5"])