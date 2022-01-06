// const cars=["volvo","bmw","toyota"];
const car=new Array("volvo","bmw","toyota");
const cars=[1,5,2,7,4,9,6,8,3,2,1,3];
car[2]=Date();
car.push(cars.length);
cars.sort();    
const sor=cars.filter((value, index)=>{
    return cars.indexOf(value)==index;
})
const dup=[];
const newSor=cars.forEach((value)=>{

    if(!dup.includes(value)){
        dup.push(value);
    }
})

console.log(dup);
console.log(typeof car);
const d=new Date();
console.log(d);