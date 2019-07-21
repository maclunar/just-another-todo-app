import React from 'react';

function TodoItem(props) {
    return (
        <div className='TodoItem'>
            <input type='checkbox' name='task' checked={props.completed}/>
            <span>{props.text}</span>
        </div>
    )
}

export default TodoItem;
