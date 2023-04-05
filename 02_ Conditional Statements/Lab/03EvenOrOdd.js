function number(input) {
    let oddOrEven = Number(input[0]);
    if (oddOrEven % 2 === 0) {
        console.log("even");
    }else{
        console.log("odd");
    }

}
number(["1024"])