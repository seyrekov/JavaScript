function cinema(input) {
    let typeRelease = input[0];
    let countRows = Number(input[1]);
    let countColumns = Number(input[2]);
    let viewers = countRows * countColumns
    let ticketprice = 0
    switch (typeRelease){
        case "Premiere": 
        ticketprice = viewers * 12
        console.log(`${ticketprice.toFixed(2)} leva`); break;
        case "Normal": 
        ticketprice = viewers * 7.5
        console.log(`${ticketprice.toFixed(2)} leva`); break; 
        case "Discount": 
        ticketprice = viewers * 5
        console.log(`${ticketprice.toFixed(2)} leva`); break;
        default: break;
    }

}
cinema(["Discount", "12", "30"])