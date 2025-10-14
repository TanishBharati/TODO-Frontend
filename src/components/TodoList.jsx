import React from 'react';
import { useDispatch } from 'react-redux';
import { List } from 'antd';
import { EditOutlined, DeleteFilled } from '@ant-design/icons';


import { removeTodo, updateTodo } from '../features/todos/todoSlice';
import '../css/TodoList.css';

const TodoList = ({ todos }) => {
    const dispatch = useDispatch();

    const handleEdit = (todo) => {
        const newText = prompt('Edit Todo', todo.text);

        if(newText !== null && newText.trim() !== '') {
        dispatch(updateTodo({ id: todo.id, text: newText.trim() }));
        }
    }

    return (
        <div>

            <List
                itemLayout='horizontal'
                dataSource={todos}
                className='todo-list'
                renderItem={item => (
                    <List.Item
                        className='todo-list-items'
                        actions={[
                            <button className='edit-btn' onClick={() => handleEdit(item)}>
                                <EditOutlined />
                            </button>,
                            <button className='delete-btn' onClick={() => dispatch(removeTodo(item.id))}>
                                <DeleteFilled />
                            </button>
                        ]}
                    >
                        <List.Item.Meta
                            title={item.text}
                            // description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default TodoList