console.log(__filename);
console.log(__dirname);

class Person {
constructor(name, age) {
    this.name = name;
    this.age = age;
}
greeter() {
    console.log(`Hello ${this.name} Age ${this.age}`);

}
}
module.exports = Person;