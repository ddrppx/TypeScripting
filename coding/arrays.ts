const superHeroes: string[] = [];

superHeroes.push('Spiderman');
superHeroes.push('Batman');

interface heroDetails {
    heroName: string;
    heroPowers: Array<string>;
}
const heroPower: Array<heroDetails> = [];

const hero1 = {
    heroName: "Spiderman",
    heroPowers: [
        "Web throw",
        "Wall grip"
    ]
}

heroPower.push(hero1)
