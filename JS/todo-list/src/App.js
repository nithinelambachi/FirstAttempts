import React, {useEffect, useState} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";


function App() {
  const fetchTodos = async () => {
    console.log("Fetching todos...");
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    setTodos(data);
  };
  // load data on page load
  useEffect(() => {
    fetchTodos();
  }, []);
    const [todos, setTodos] = useState([]);
 const createTodo = async (title) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({title, completed: false}),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    console.log("res", response);
  }
    const addTodo = (todo) => {
      setTodos([...todos, {title:todo}] );
      createTodo(todo);
    };

    const markComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const editTitle = (id, title) => {
        
      //   const newTodos = [...todos];
      //   // change title according to id
      //  const newNewtod = newTodos.map((todo) => {
      //       if (todo.id === id) {
      //           todo.title = title;
      //       }
      //     });
          
      //   // newTodos.filter(todo => todo.id === id)[0].title = title)
      //   // newTodos[index].text = title;
      //   setTodos(newNewtod);

    };
    

    return (
      <div className="parent-container">
          <div className="container top-container">
              <div className="app">
                  <div className="todoform">
                      <TodoForm addTodo={addTodo} />
                      <Todos todos={todos} markComplete={markComplete} editTitle={editTitle}/>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default App;