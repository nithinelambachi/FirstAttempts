//find which number is nearest to given two values
const nearTo100=(num1, num2)=> 100-num1 < 100-num2 ? num1 : num2 ;

console.log(nearTo100(89,29));
console.log(nearTo100(19,29));
console.log(nearTo100(19,19));

//number of occurance of a character in a string
// const occ=(str, ch)=>{
//     const s=str.split('');
//     let sum=0;
//     const occr=s.reduce((sum, item)=>{
//         if(ch==item){
//             sum++;
//         }
//         return sum;
//     })
//     return occr;
// }
const occ=(str, char)=>{
    const s=str.split('');
    let sum=0;
   s.filter(ch=>{
        if(char==ch){
            sum++;
        }
       
    })
    return sum;
}
console.log(occ("hello", 'l'));

//number of even digits in an array of integers
const arr=[1,5,8,4,2,9,11,12];
// const findEven=items=>items%2==0;

const findEven=arr.filter(item=>item%2==0)

console.log(findEven);
