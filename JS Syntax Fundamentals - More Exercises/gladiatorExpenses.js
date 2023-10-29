function calculateEquipmentPrice(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShiled = 0;
    
    for (let i = 2; i <= lostFightsCount; i++) {
        if (i % 2 == 0) {
            brokenHelmet++;
        }
        
        if (i % 3 == 0) {
            brokenSword++;
        }
        
        if (i % 3 == 0 && i % 2 == 0) {
            brokenShiled++;
        }
    }

    let brokenArmor = Math.floor(brokenShiled / 2);

    let finalSum = (brokenHelmet * helmetPrice + brokenSword * swordPrice + brokenShiled * shieldPrice + brokenArmor * armorPrice).toFixed(2);
    console.log(`Gladiator expenses: ${finalSum} aureus`);
}