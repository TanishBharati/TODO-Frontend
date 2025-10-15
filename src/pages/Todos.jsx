import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AddTodoForm from '../components/addTodoForm';
import TodoList from '../components/TodoList';
import '../css/Todos.css'
import { fetchTodos } from '../features/todos/todoSlice';

const Todos = () => {
  // const todos = useSelector(state => state.todos.todos);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className='main'>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Todos — My pending tasks</h1>
      <p style={{ color: '#333' }}>This page lists your todos. If you see this text the route is working.</p>

      <AddTodoForm />
      <TodoList todos={todos} />
      
    </div>
  )
}

export default Todos;