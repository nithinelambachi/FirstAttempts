import React, { useState } from "react";
import Todo from "./Todo";
const Todos = ({ todos, markComplete, editTitle }) => {
	// const updateTodo = (index, todo, newTitle) => {
	// 	console.log("title", newTitle);
	// };
	return (
		<div className={"todo-list"}>
			{todos
				.map((todo, index) => (
					<Todo
						todo={todo}
						key={index}
						index={index}
						markComplete={markComplete}
						editTitle={editTitle}
						// updateTodo={updateTodo}
					/>
				))
				.reverse()}
		</div>
	);
};

export default Todos;
