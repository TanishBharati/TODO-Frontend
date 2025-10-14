import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { 
            id: nanoid(), 
            text: 'My First Todo',
            completed: false
        },
    ]
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }

            state.todos.push(todo);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            todo.completed = !todo.completed;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(t => t.id == id);
            todo.text = text;
        },
    }
});

export const { addTodo, toggleTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer; 