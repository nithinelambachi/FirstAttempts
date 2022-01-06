const form=document.querySelector('#my-form');
const name=document.querySelector('#name');
const email=document.querySelector('#email');
const msg=document.querySelector('.msg');
const users=document.querySelector('.users');
form.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();
    var number=name.value;
    var arr=number.split(' ');
    //arr.sort((a,b)=>a-b);


//sorting using set
//const dup=[...new Set(arr)];


//filter method
// const dup1=arr.filter((value, index)=>{
//     console.log(value, index);
// return arr.indexOf(value)===index;
// });

//Foreach method
// function uniqueElements(arr)
// {
//     const dup=[];
//      arr.forEach((element) => {
// if(!dup.includes(element))
// {
//     dup.push(element);
// }
// });
// return dup;
// }
// const dup2=uniqueElements(arr);
// dup2.sort((a,b)=>a-b);
// console.log(dup2);
   
    //remove last duplicates
let dup2=arr.filter((element, index) => {
    console.log(index, element);
return arr.lastIndexOf(element)==index;

});
dup2.sort((a,b)=>b-a)
    users.innerHTML=dup2;
  

}
