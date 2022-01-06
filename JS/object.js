// function Person(name, age, dob){
//     this.name=name;
//     this.age=age;
//     this.dob=new Date(dob);
// }
// Person.prototype.getyear=function(){
//     return this.dob.getFullYear();
// }
// const person1=new Person('nithi','26','1-8-95');
// console.log(person1.getyear());

class Person{
    constructor(dob){
        this.dob=new Date(dob);
    }
    getyear(){
       console.log(this.dob.getFullYear());
    }

}
const per=new Person('10-04-1998');
per.getyear();

let car={
    name:'BMW',
    model:'X5',
    year:2018
}
for(let prop in car){
    console.log(`${prop} : ${car[prop]}`);
}