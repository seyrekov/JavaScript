function pass(input) {
    let ourPass = input[0];
    if (ourPass === "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
pass(["qwerty"])