function carWash(commands) {
    let result = 0;

    for (const command of commands) {
        switch (command) {
            case "soap":
                result += 10;
                break;
            case "water":
                result += result * 0.2;
                break;
            case "vacuum cleaner":
                result += result * 0.25;
                break;
            case "mud":
                result *= 0.9;
                break;
        }
    }

    console.log(`The car is ${result.toFixed(2)}% clean.`);
}