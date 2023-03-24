import React from 'react';

const Todo = (props) => {
    console.log(props);
    const { title, id, completed } = props.todo
    return (
        <div>
            <h1>Name: {title}</h1>
        </div>
    );
};

export default Todo;