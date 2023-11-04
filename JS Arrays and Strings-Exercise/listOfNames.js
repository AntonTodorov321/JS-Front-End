function printListOfNames(arr){

    result = arr.sort((a,b)=>{
       return a.localeCompare(b)
    });

    let index = 0;

    for (const name of arr) {
        console.log(`${++index}.${name}`);
    }
}