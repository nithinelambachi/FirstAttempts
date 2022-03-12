import React from 'react'

const Todo = ({todo, index, markComplete, editTitle,updateTodo}) =>{
    // const [isEditVisible, setVisible] = useState(false);
    // let button;
    // if (isEditVisible) {
    //   button = <div> <input type={'text'} value={todo.title} onChange={(e)=>updateTodo(index,todo,e.value)}/></div>
    // } else {
    //   button = <div></div>;
    // }
    return(
    
   <div className="todo">
        <p style={{textDecoration : todo.completed ? "line-through" : ""}}>
            <input type={"checkbox"} 
            checked={todo.completed} 
            data-testid="todo"
            onChange={() => markComplete(index)} 
            id={todo.id}/>
           
            {todo.title}  </p>
            
{/*          
             {button}
            <input type={'button'} value={'Edit'} onClick={() => setVisible(!isEditVisible)}/> */}
      
    </div>
);}
export default Todo;