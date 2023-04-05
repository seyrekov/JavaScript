function area(input) {
   let figure = input[0];
   let a = input[1];
   let b = input[2];
   let area = 0

   if (figure === "square") {
// squareArea = a * a
        area = a * a;

   } else if (figure === "rectangle"){
// rectangleArea = a * b
        area = a * b;
   } else if (figure === "circle"){
// circleArea = Pi * (r*r)
        area = Math.PI * (a * a);
   } else if (figure === "triangle"){
// triangleArea = (a * b) /2
        area = a * b / 2
    }

   console.log(area.toFixed(3));
}
area(["triangle","4.5","20"])