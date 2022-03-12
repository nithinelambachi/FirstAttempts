import TodoForm from "../components/TodoForm";
import {screen,  getByTestId,getByText, render, fireEvent, cleanup } from "@testing-library/react";
const mockAddTodo = jest.fn();
import {addTodo} from'../App';
import Todo from "../components/Todo";
describe("<TodoForm />", () => {
    it("check label and input is in document render", () => {
      const {getByTestId, getByText, debug} = render(<TodoForm addTodo={mockAddTodo} />);
      debug();
      expect(getByText(/Add Tod/i)).toBeInTheDocument();
        expect(getByTestId("todo-input")).toBeInTheDocument();
        const input=getByTestId("todo-input");
        fireEvent.change(input, {target: {value: "test"}});

    });
    it("should render without crashing", () => {
        render(<TodoForm addTodo={mockAddTodo} />);
    });
    
    it("should render the input", () => {
        const { getByTestId } = render(<TodoForm addTodo={mockAddTodo} />);
        expect(getByTestId("todo-input")).toBeInTheDocument();
    });
    
    it("should render the submit button", () => {
        const { getByTestId } = render(<TodoForm addTodo={mockAddTodo} />);
        expect(getByTestId("button")).toBeInTheDocument();
    });
    
    // it("should call the onSubmit prop when submitted", () => {
    //     const onSubmit = jest.fn();
    //     const { getByText, getByTestId } = render(<TodoForm addTodo={mockAddTodo} />);
    //     const input = getByTestId("todo-input");
    //     const button = getByTestId("button");
    //     userEvent.type(input, "Buy milk");
    //     userEvent.click(button);
    //     expect(handleSubmit).toHaveBeenCalledTimes(1);
    // });
});