function login(words) {
    let username = words[0];
    let result = `User ${username} blocked!`;
    let wrongPassCount = 0;

    for (let index = 1; index < 5; index++) {

        if (username === words[index].split("").reverse().join("")) {
            result = `User ${username} logged in.`;
            break;
        } else {
            wrongPassCount++;
            if (wrongPassCount === 4) {
                console.log(`User ${username} blocked!`);
                return;
            }

            console.log(`Incorrect password. Try again.`);
        }
    }

    console.log(result);
}