import React from 'react';

function TodoItem() {
    return (
        <div className='TodoItem'>
            <input type='checkbox' name='task'/>
            <span>Clean the house</span>
        </div>
    )
}

export default TodoItem;
