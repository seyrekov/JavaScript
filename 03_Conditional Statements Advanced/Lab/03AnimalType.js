function animal(input) {
    let typeAnimal = input[0];
    switch (typeAnimal){
        case "dog": console.log("mammal"); break;
        case "tortoise":
        case "snake":
        case "crocodile": console.log("reptile"); break;
        default: console.log("unknown");
    }
}
animal(["cat"])