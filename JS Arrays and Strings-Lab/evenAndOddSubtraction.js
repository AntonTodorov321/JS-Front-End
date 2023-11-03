function calculateDiffBetweenEvenAndOddSum(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];

        if(curNum % 2 ==0){
            evenSum += curNum; 
        } else {
            oddSum += curNum;
        }
    }

    console.log(evenSum - oddSum);
}

calculateDiffBetweenEvenAndOddSum([1,2,3,4,5,6]);