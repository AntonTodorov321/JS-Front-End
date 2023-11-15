function printDNA(number) {

    const DNA = {
        1: "**AT**",
        2: "*C--G*",
        3: "T----T",
        4: "*A--G*",
        5: "**GG**",
        6: "*A--T*",
        7: "C----G",
        8: "*T--T*",
        9 : "**AG**",
        10 : "*G--G*"
    }

    for (let index = 1; index <= number; index++) {
        console.log(DNA[index]);

        if (index === 10) {
            index -= 10;
            number -= 10;
        }
    }
}