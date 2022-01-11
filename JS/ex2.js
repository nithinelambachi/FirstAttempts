//get the current date in different formats
const date=new Date();
 const formateDate=(date=>{
     const days=date.getDate();
return days;
 })
 console.log(formateDate(date));
//  console.log(formateDate()); const formateDate=(date=new Date())=>{
//      const days=date.getDate();
// return days;
//  }
//  console.log(formateDate());

//create new string by taking 1st 3 char and last 3 char from a string
const strfn=str=>{
    return(str.slice(0,3)+str.slice(-3))
}
console.log(strfn('hellobabe'))

//first half of a string
const halfStr=str=>{
    return(str.slice(0,str.length/2))
}
console.log(halfStr("hello javascript"));


//concatenate 2 strings expect their first char
const conc=(str1,str2)=>{
    return `${str1.slice(1)} ${str2.slice(1)}`
}
console.log(conc('hello', 'javascript'));
