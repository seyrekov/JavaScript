function num(input) {
    let n = Number(input[0]);
    for (let i = 0; i <= n; i +=2 ){
        let res = Math.pow(2, i) // 2x0=1,2x2=4,2x2x2x2=16
        console.log(res);
    }
}
num(["4"])