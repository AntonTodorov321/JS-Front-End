function findMaterialsForPiramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let finalStepInt = Math.ceil(base / 2);
    let stepCount = 0;

    for (let index = 1; index <= finalStepInt; index++) {
        stepCount++;

        if (index === finalStepInt) {
            gold += (base * base) * increment;
        } else if (index % 5 === 0) {
            let currLapis = (4 * base) - 4;
            lapis += currLapis;
            stone += (base * base) - currLapis;
        } else {
            let currMarble = (4 * base) - 4;
            marble += currMarble;
            stone += (base * base) - currMarble;
        }

        base -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(stepCount * increment)}`);
}