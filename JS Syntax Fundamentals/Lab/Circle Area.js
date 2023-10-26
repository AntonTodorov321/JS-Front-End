function calculateArea(radius){
    let result;

    if(typeof(radius) != "number"){
        console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
        return;
    }

    result = Math.PI * radius * radius;

    console.log(result.toFixed(2));
}