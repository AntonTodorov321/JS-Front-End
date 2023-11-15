function radioCrystals(numArr) {

    [finalThickness, ...differentChunkThickness] = numArr;

    function checkIsFinish(currentOperation, finalThickness, currentThickness) {
        if (currentThickness === finalThickness - 1) {
            currentThickness++;
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${currentThickness} microns`);
            return true;
        } else if (currentOperation == 0 || currentThickness === finalThickness) {
            console.log(`Finished crystal ${finalThickness} microns`);
            return true;
        }
        return false;
    }

    function transportingAndWashing(currentThickness) {
        console.log(`Transporting and washing`);
        return Math.floor(currentThickness);
    }

    for (let currentThickness of differentChunkThickness) {

        console.log(`Processing chunk ${currentThickness} microns`);

        let cutOperation = 0;
        let lapOperation = 0;
        let grindOperation = 0;
        let etchOperation = 0;

        while ((currentThickness / 4) >= finalThickness - 1) {
            currentThickness /= 4;
            cutOperation++;
        }
        console.log(`Cut x${cutOperation}`);
        currentThickness = transportingAndWashing(currentThickness);
        if (checkIsFinish(cutOperation, finalThickness, currentThickness)) {
            continue;
        }

        while ((currentThickness * 0.8) >= finalThickness - 1) {
            currentThickness *= 0.8;
            lapOperation++;
        }
        console.log(`Lap x${lapOperation}`);
        currentThickness = transportingAndWashing(currentThickness);
        if (checkIsFinish(lapOperation, finalThickness, currentThickness)) {
            continue;
        }

        while ((currentThickness - 20) >= finalThickness - 1) {
            currentThickness -= 20
            grindOperation++;
        }
        console.log(`Grind x${grindOperation}`);
        currentThickness = transportingAndWashing(currentThickness);
        if (checkIsFinish(grindOperation, finalThickness, currentThickness)) {
            continue;
        }

        while ((currentThickness - 2) >= finalThickness - 1) {
            currentThickness -= 2;
            etchOperation++;
        }
        console.log(`Etch x${etchOperation}`);
        currentThickness = transportingAndWashing(currentThickness);
        if (checkIsFinish(etchOperation, finalThickness, currentThickness)) {
            continue;
        }
    }
}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000]);