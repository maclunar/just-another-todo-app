import React from 'react';

class TodoItem extends React.Component {
    render() {
        return(
            <div className='TodoItem'>
                <input type='checkbox' name='task' checked={this.props.todo.completed}/>
                <span>{this.props.todo.text}</span>
            </div>
        )
    }
}

export default TodoItem;
