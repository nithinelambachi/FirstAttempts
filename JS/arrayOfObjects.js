const todos=[
    {
    id:1,
    text: "Task1",
    completed:true
},  {
    id:2,
    text: "Task2", completed:false
} ,{
    id:3,
    text: "Task3", completed:true
}
];
// console.log(todos);
let arr=Object.values(todos);
console.log(arr);
// Convert into json format
const todoJson=JSON.stringify(todos)
console.log(todoJson);
todos.forEach(todo=>{
    if(todo.completed==false){
    console.log(todo)
    }
    })
const todoMap=todos.map(todo=>todo.text)
console.log(todoMap);
const todoFilter=todos.filter(todo=> todo.completed==true)
console.log(todoFilter);
const todoMix=todos.filter(todo=> todo.completed===true).map(todo=>todo.text)
console.log(todoMix);