import React from 'react';

import TodoItem from './TodoItem'
import todosData from '../data/todosData'

function TodoList() {
    const storedTodos = todosData.map(todo => <TodoItem key={todo.id} todo={todo} />)

    return (
        <div className='TodoList'>
            {storedTodos}
        </div>
    );
}

export default TodoList;
