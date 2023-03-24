import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const { title, id, completed } = props.todo
    return (
        <div className='todo'>
            <h1>Name: {title}</h1>
            <p>ID: {id}</p>
            <p>Completed: {completed ? 'Available' : 'Not Available'}</p>
        </div>
    );
};

export default Todo;