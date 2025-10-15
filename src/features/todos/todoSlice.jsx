import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    console.log(`${BACKEND_URL}${BASE_URL}/create`);

    export const fetchTodos = createAsyncThunk(
        'todos/fetchTodos',
        async () => {
            const res = await axios.get(`${BACKEND_URL}${BASE_URL}/fetch`);
            return res.data.data;
        }
    );

    export const addTodo = createAsyncThunk(
        'todos/addTodo',
        async (text) => {
            const res = await axios.post(`${BACKEND_URL}${BASE_URL}/create`, { text, completed: false });
            return res.data.data;
        } 
    );

    export const deleteTodo = createAsyncThunk(
        'todos/deleteTodo',
        async (id) => {
            await axios.delete(`${BACKEND_URL}${BASE_URL}/delete/${id}`);
            return id;
        }
    );

    export const updateTodo = createAsyncThunk(
        'todos/updateTodo',
        async ({ id, text, completed }) => {
            const res = await axios.put(`${BACKEND_URL}${BASE_URL}/update/${id}`, { text, completed });
            return res.data.data;
        }
    )

    const initialState = {
        todos: [
            { id: nanoid(), text: 'My First Todo', completed: false }
        ],
        loading: false,
        status: 'idle',
        error: null,
    };

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // addTodo: (state, action) => {
        //     const todo = {
        //         id: nanoid(),
        //         text: action.payload,
        //         completed: false
        //     }

        //     state.todos.push(todo);
        // },
        // toggleTodo: (state, action) => {
        //     const todo = state.todos.find(todo => todo.id === action.payload);
        //     todo.completed = !todo.completed;
        // },
        // removeTodo: (state, action) => {
        //     state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        // },
        // updateTodo: (state, action) => {
        //     const { id, text } = action.payload;
        //     const todo = state.todos.find(t => t.id == id);
        //     todo.text = text;
        // },
    },
    extraReducers: (builder) => {
        builder
            // Fetch Todos 
            .addCase(fetchTodos.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                state.status = 'pending';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Something went wrong';
                state.status = 'rejected';
            })
            // Add Todos
            .addCase(addTodo.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                state.status = 'pending';
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.todos.push(action.payload);
                state.status = 'succeeded';
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Something went wrong';
                state.status = 'rejected';
            })
            // Delete Todo
            .addCase(deleteTodo.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                state.status = 'pending';
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = state.todos.filter(todo => todo._id !== action.payload);
                state.status = 'succeeded';
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Something went wrong';
                state.status = 'rejected';
            })
            // Update Todo
            .addCase(updateTodo.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                state.status = 'pending';
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.todos.findIndex(t => t._id == action.payload._id);
                if(index !== -1) {
                    state.todos[index] = action.payload;
                }
                state.status = 'succeeded';
            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Something went wrong';
                state.status = 'rejected';
            })
    }
});

// export const { addTodo, toggleTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer; 