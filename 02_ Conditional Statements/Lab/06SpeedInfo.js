function speed(input) {
    let currentSpeed = input[0];
    if (currentSpeed <=10) {
        console.log("slow");
    } else if (currentSpeed > 10) {
        if (currentSpeed <= 50 ){
            console.log("average");
        } else if (currentSpeed > 50){
            if (currentSpeed <= 150){
                console.log("fast");
            } else if (currentSpeed > 150){
                if (currentSpeed <=1000) {
                    console.log("ultra fast");
                } else{
                    console.log("extremely fast");
                }
            }
            
        }
    }
}
speed(["35000"])