function isYearIsLeep(year) {
    let date = new Date(year, 2 , 1);
    date.setDate(date.getDate() -1);
    day = date.getDate();
    
    if (day == 28) {
        console.log("no");
    } else {
        console.log("yes");
    }
}