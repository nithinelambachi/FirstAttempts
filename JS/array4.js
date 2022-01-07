//sum of all elements in an array
var number=[5,-3,-5,8,-7,1,7,2,12,5];
var arr=[5,3,5,8,7,1,7,2,12,5];
// const news=number.splice(0,2);
// console.log(news);
// const chec=number.some(e=>e>0);
// console.log(chec);
// let n=number.length
//method using Reduce
// var sum= arr.reduce((sum, items)=>   sum+items);

//sort using arrow method
arr.forEach((value, index)=>{
    for(let i=index+1;i<arr.length;i++)
    {
        if(arr[index]>arr[i]){
            let temp=arr[index];
            arr[index]=arr[i];
            arr[i]=temp;
        }
    }
    });
    
console.log(arr);
//sort using normal methods

// for (i = 0; i < n; ++i) 
// {

//     for (j = i + 1; j < n; j++)
//     {

//         if (number[i] > number[j]) 
//         {

//             a =  number[i];
//             number[i] = number[j];
//             number[j] = a;

//         }

//     }

// }
const sum=number.reduce((items, sum)=>sum+=items)
// const sum=arr.reduce((items, sum)=>sum=sum+items);
console.log(number);  
console.log(sum);

