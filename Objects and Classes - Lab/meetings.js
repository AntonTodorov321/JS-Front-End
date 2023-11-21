function meeting(input) {
    let daysAndPeople = {};

    for (const row of input) {
        let [day, people] = row.split(" ");

        if (daysAndPeople[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            daysAndPeople[day] = people;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const row in daysAndPeople) {
        console.log(`${row} -> ${daysAndPeople[row]}`);
    }
}