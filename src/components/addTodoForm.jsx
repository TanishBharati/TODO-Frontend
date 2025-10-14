import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Input, Button } from 'antd';

import { addTodo } from "../features/todos/todoSlice";
import '../css/addTodoForm.css'

const { TextArea } = Input; 

const AddTodoForm = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const inputSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        console.log(input + " added");
        setInput('');
    };

  return (
    <div>
        <form className="add-todo-form" onSubmit={inputSubmitHandler}>
            <TextArea 
                placeholder="Enter your Todo task."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="add-todo-input"
                autoSize={{ minRows: 1, maxRows: 6 }}
            />
            <Button 
                type='primary'
                htmlType="submit"
                className="add-todo-submit"
            >
                Add
            </Button>
        </form>
    </div>
  )
}

export default AddTodoForm;