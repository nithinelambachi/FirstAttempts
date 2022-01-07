//return true if anny number is 100 or its sum is 100
const is100=(a,b)=>{
    if(a==100|| b==100||(a+b)==100)
    return true;
    else
    return false
}
console.log(is100(100,5));
console.log(is100(10,90));


//get the extension of a filename
const getExt=(str)=>{
    return str.slice(str.lastIndexOf('.'));
 }
 console.log(getExt("id.txt"));