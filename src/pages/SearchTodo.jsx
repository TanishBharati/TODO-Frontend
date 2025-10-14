import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from 'antd';

import '../css/SearchTodo.css';
import TodoList from '../components/TodoList';

// const { Search } = Input;

const SearchTodo = () => {
    const todos = useSelector(state => state.todos);
    const [searchTodo, setSearchTodo] = useState('');
    // const [apiTodos, setApiTodos] = useState(todos);
    const [filteredTodos, setFilteredTodos] = useState([]);


    const handleInputChange = (e) => {
        const searchItem = e.target.value;
        setSearchTodo(searchItem);

        if(searchItem.trim() === '') {
            setFilteredTodos([]);
            return;
        }

        // const filteredItems = apiTodos.filter(todo => todo.text.toLowerCase().includes(searchTodo.toLowerCase()));
        const filteredItems = todos.filter(todo => todo.text.toLowerCase().includes(searchTodo.toLowerCase()));

        setFilteredTodos(filteredItems);
    }

  return (
    <div className='main'> 
        <h1>Search</h1>
        <p>This is the Search page. If you see this text the route is working.</p>
        <Input
            placeholder='Type to search'
            className='searchbar'
            onChange={handleInputChange}
        />

        <TodoList todos={filteredTodos} />
    </div>
  )
}

export default SearchTodo