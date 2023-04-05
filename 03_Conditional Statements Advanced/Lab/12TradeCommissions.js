function profit(input) {
    let city = input[0];
    let sales = Number(input[1]);
    
    switch (city) {
        case "Sofia":
            if (sales <= 500 && sales >= 0){
                let bonus = sales * 0.05;
                console.log(`${bonus.toFixed(2)}`); 
            } else if (sales > 500 && sales <= 1000){
                let bonus = sales * 0.07;
                console.log(`${bonus.toFixed(2)}`);
            } else if (sales > 1000 && sales <= 10000){
                let bonus = sales * 0.08;
                console.log(`${bonus.toFixed(2)}`);
            } else if (sales > 10000){
                let bonus = sales * 0.12;
                console.log(`${bonus.toFixed(2)}`);
            }else{
                console.log("error");
            }
            
            break;
        case "Varna":
            if (sales <= 500 && sales >= 0){
                let bonus = sales * 0.045;
                console.log(`${bonus.toFixed(2)}`); 
            } else if (sales > 500 && sales <= 1000){
                let bonus = sales * 0.075;
                console.log(`${bonus.toFixed(2)}`);
            } else if (sales > 1000 && sales <= 10000){
                let bonus = sales * 0.10;
                console.log(`${bonus.toFixed(2)}`);
            } else if (sales > 10000){
                let bonus = sales * 0.13;
                console.log(`${bonus.toFixed(2)}`);
            }else{
                console.log("error");
                }
            break;
            case "Plovdiv":
                if (sales <= 500 && sales >= 0){
                    let bonus = sales * 0.055;
                    console.log(`${bonus.toFixed(2)}`); 
                } else if (sales > 500 && sales <= 1000){
                    let bonus = sales * 0.08;
                    console.log(`${bonus.toFixed(2)}`);
                } else if (sales > 1000 && sales <= 10000){
                    let bonus = sales * 0.12;
                    console.log(`${bonus.toFixed(2)}`);
                } else if (sales > 10000){
                    let bonus = sales * 0.145;
                    console.log(`${bonus.toFixed(2)}`);
                }else{
                    console.log("error");
                }
            break;
        default: console.log("error");
            break;
    }
}
profit(["Plovdiv", "10000.01"])