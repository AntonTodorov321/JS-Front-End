function inventory(inputArray) {
    let heroes = [];

    for (const heroData of inputArray) {
        const [name, level, items] = heroData.split(" / ");
        let hero = {
            name,
            level: Number(level),
            items
        };

        heroes.push(hero);
    }

    heroes = heroes.sort((a, b) => { return a.level - b.level })

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}