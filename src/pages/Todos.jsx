import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AddTodoForm from '../components/addTodoForm';
import { removeTodo, updateTodo } from '../features/todos/todoSlice';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleEdit = (todo) => {
    const newText = prompt('Edit Todo', todo.text);

    if(newText !== null && newText.trim() !== '') {
      dispatch(updateTodo({ id: todo.id, text: newText.trim() }));
    }
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Todos — My pending tasks</h1>
      <p style={{ color: '#333' }}>This page lists your todos. If you see this text the route is working.</p>

      <AddTodoForm />

      {
        todos && todos.map((todo) => (
          <li key={todo.id}>
            { todo.text }
            <button onClick={() => handleEdit(todo)}>
              Edit
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))
      }
    </div>
  )
}

export default Todos;