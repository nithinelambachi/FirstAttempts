var arr=[1,5,7,8,9,3];
var sum=0;
function display(newSum){
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
newSum(sum);
} 
function newSum(sum){
    console.log(sum);
}