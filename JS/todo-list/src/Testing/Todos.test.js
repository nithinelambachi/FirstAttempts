import Todos from "../components/Todos";
import { screen } from "@testing-library/react";
import { getByTestId, getByText, render, userEvent } from "@testing-library/react";
import { addTodo, toggleTodo, editTodo } from "../App";
describe('passing values to todo', () => {
    it('should render todo list', () => {
        render(<Todos />);
        screen.getByTestId('todo');
        

    }); 
});
