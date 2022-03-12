import Todo from "../components/Todo";
import { screen } from "@testing-library/react";
import { getByTestId, getByText, render, userEvent } from "@testing-library/react";

describe('todo list is showing', () => {
    it('should render todo list', () => {
       render(<Todo />);
       screen.getByTestId('todo');
    });     
});