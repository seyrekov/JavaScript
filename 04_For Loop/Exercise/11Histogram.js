function nums(input) {
    let numNumbers = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let index = 1; index <= numNumbers; index++) {
        ourNum = Number(input[index]);
        if (ourNum < 200){
            p1 += 1;
        } else if (ourNum >=200 && ourNum < 400) {
            p2 += 1;
        } else if (ourNum >=400 && ourNum < 600) {
            p3 += 1;
        } else if (ourNum >=600 && ourNum < 800){
            p4 += 1;
        } else {
            p5 += 1;
        }
         
    }
    console.log((p1 / numNumbers * 100).toFixed(2) + "%");
    console.log((p2 / numNumbers * 100).toFixed(2) + "%");
    console.log((p3 / numNumbers * 100).toFixed(2) + "%");
    console.log((p4 / numNumbers * 100).toFixed(2) + "%");
    console.log((p5 / numNumbers * 100).toFixed(2) + "%");
}
nums(["7","800","801","250","199","399","599","799"])