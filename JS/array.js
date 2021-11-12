let input=[ ["name", "age"], ["John", 22], ["David", 30] ] ;
// const header = input[0];
// const value=input.slice(1);
let [header, ...value]=input;
// console.log(header);
// console.log(value);
const result =value.map((value)=>{
    const obj={};
    obj[header[0]]=value[0];
    obj[header[1]]=value[1];
    return obj;
});
   
console.log(result);