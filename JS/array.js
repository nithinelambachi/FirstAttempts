//2 types of array declaration
var a= Array(2,3,4,5,6)
var a =[2,4,5,6]
console.log(typeof(a));
console.log(a);


let input=[ ["name", "age", "salary", "email"], ["John", 22, 56000, "John@gmail.com"],
 ["David", 30, 46800, "david@yahoo.in"] ] ;
// const header = input[0];
// const value=input.slice(1);
let [header, ...value]=input;

// console.log(header);
// console.log(value);
const result =value.map((value)=>{
    const obj={};
    for(let i=0; i<header.length; i++){
        obj[header[i]]=value[i];
    }
    return obj;
    // obj[header[0]]=value[0];
    // obj[header[1]]=value[1];

});
   
console.log(result);