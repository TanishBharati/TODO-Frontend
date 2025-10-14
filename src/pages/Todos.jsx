import React from 'react';
import { useSelector } from 'react-redux';

import AddTodoForm from '../components/addTodoForm';
import TodoList from '../components/TodoList';
import '../css/Todos.css'

const Todos = () => {
  const todos = useSelector(state => state.todos);

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