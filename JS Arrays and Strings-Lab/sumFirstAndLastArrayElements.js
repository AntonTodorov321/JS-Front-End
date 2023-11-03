function printSum(arr){
    let lastNum = arr.pop();
    let firstNum = arr.shift();
    let sum = lastNum + firstNum;

    console.log(sum);
}
