import { configureStore } from '@reduxjs/toolkit';
import todoReducers from '../features/todos/todoSlice';

export const store = configureStore({
    reducer: todoReducers
});