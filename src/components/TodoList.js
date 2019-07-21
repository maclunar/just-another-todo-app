import React from 'react';

import TodoItem from './TodoItem'
import todosData from '../data/todosData'

function TodoList() {
    const storedTodos = todosData.map(todo => {
        return(<TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>)
    })

    return (
        <div className='TodoList'>
            {storedTodos}
        </div>
    );
}

export default TodoList;
