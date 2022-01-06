console.log("Hello");
console.warn("This is warning")
console.error("This is Error")
let name="nithin";
let age=25;
console.log(`My name is ${name} age: ${age} `);
console.log(name.substring(2,4).toUpperCase());
//Split string into array
let arr=name.split('');
console.log(arr[2]);
let fruits='mango,apple,orange,banana'
console.log(fruits.split(','));
//Arrays
const arr2= new Array('map',1,2,3,4,5,5,6)

arr2.unshift("front added")
arr2.push("Add to the end")
console.log(arr2);  
console.log(arr2.indexOf('map'));