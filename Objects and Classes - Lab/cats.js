function cats(input) {

    class Cat {

        constructor(name, age) {
            this.name = name,
            this.age = age
        }

        Meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const row of input) {
        const [name, age] = row.split(" ");
        let cat = new Cat(name, age);
        cat.Meow();
    }
}

cats(['Mellow 2', 'Tom 5'])