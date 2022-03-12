import React, { useEffect, useState } from "react";
import "./App.css";
// import "./output.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
	const [todos, setTodos] = useState([]);

	const fetchTodos = async () => {
		console.log("Fetching todos...");
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos"
		);
		const data = await response.json();
		setTodos(data);
	};
	// load data on page load
	useEffect(() => {
		fetchTodos();
	}, []);

// posting data to the server
	const createTodo = async (title) => {
		console.log("res");
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos",
			{
				method: "POST",
				body: JSON.stringify({ title, completed: false }),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}
		);
	};
	const addTodo = (todo) => {
		setTodos([...todos, { title: todo }]);

		createTodo(todos);
	};

	const markComplete = (index) => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
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
		<div className="p-10">
			<div className="m-10">
				<div >
					<div>
						<TodoForm addTodo={addTodo} />
						<Todos
							todos={todos}
							markComplete={markComplete}
							editTitle={editTitle}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
