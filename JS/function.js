
function sum(num1,  num2=3.14){
   return num1+num2
}
console.log(sum(5));
//arrow function
const sumArr=(num1,num2)=>num1+num2;
console.log(sumArr(8,5));
const check=()=>{console.log("Check");}
check();


//passing arguments without initializing
const sum2=sum1(1,5,7,8,9,7,8,9,7,8);
console.log(sum2);

function sum1(){
   let sum=0;
   for(let i=0;i<arguments.length;i++){
      sum+=arguments[i];
}
return sum;
}
//recursive function
function factorial(num){
   if(num==1){
  return 1;
   }
   else
   return num*factorial(num-1);
}
let fact=factorial(2);
console.log(fact);
