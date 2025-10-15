import { configureStore } from '@reduxjs/toolkit';
import todoReducers from '../features/todos/todoSlice.jsx';

export const store = configureStore({
    reducer: todoReducers
});