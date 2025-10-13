import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Input, Button } from 'antd';

import { addTodo } from "../features/todos/todoSlice";

const { TextArea } = Input; 

const AddTodoForm = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const inputSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

  return (
    <div>
        <form onSubmit={inputSubmitHandler}>
            <TextArea 
                placeholder="Enter your Todo task."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ width: '100%', maxWidth: '400px', margin: '20px 4px' }}
                autoSize={{ minRows: 1, maxRows: 6 }}
            />
            <Button 
                type='primary'
                style={{ width: '100%', maxWidth: '100px', margin: '20px 4px' }}
            >
                Add
            </Button>
        </form>
    </div>
  )
}

export default AddTodoForm;