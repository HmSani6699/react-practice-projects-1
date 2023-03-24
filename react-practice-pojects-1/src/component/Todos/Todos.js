import React, { useEffect, useState } from 'react';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, []);
    return (
        <div>
            <h1>Hallo all todos in: {todos.length}</h1>
        </div>
    );
};

export default Todos;