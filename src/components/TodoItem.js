import React from 'react';

function TodoItem(props) {
    return (
        <div className='TodoItem'>
            <input type='checkbox' name='task' checked={props.todo.completed}/>
            <span>{props.todo.text}</span>
        </div>
    )
}

export default TodoItem;
