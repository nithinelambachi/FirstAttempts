const obj={
    name:"nithi",
    walk(){
        console.log(this);
    }
}
const objDup=obj.walk.bind(obj);
console.log(objDup);



function test()
{
    for(let i=0;i<5;i++){
        console.log(i);
    }
    // console.log(i);
}
test();
//console.log(i); 