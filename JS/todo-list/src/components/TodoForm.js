import React, { useState } from "react";
import '../output.css';
const TodoForm = ({ addTodo }) => {
	const [value, setvalue] = useState("");

	const handleChange = (e) => {
	
		setvalue(e.target.value); 
	};

	const handleSubmit = (e) => {
		e.preventDefault(); 
		if (!value)
			return;
		addTodo(value);
		setvalue(""); 
	};

	return (
		<div>
			<div className="text-xl p-10 m-10">Todo List</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="todo-input" className="block">
					Add Todo 
				</label>
				<input
				data-testid="todo-input"
					type="text"
					placeholder="Add a ToDo"
					value={value}
					onChange={handleChange}
				/>
				<input data-testid="button" className="button" placeholder="Add" type={"submit"} value={"Add"} />
			</form>
		</div>
	);
};

export default TodoForm;
