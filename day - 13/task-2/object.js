const person = {
    name: "Anirudha",
    age: 22,
    details() {
        return `Name: ${this.name} and he is ${this.age} years old.`;
    }
}

module.exports = person;