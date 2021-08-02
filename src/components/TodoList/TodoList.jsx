import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Item} from "./Item/Item";

export const TodoList = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])


    const changeInput = (e) => {
        setValue(e.target.value)
    }

    const addTodo = () => {
        setTodos([...todos, value])
    }

    const deleteItemById = (id) => {
        setTodos([...todos.slice(0, id), ...todos.slice(id + 1)])
    }

    const result = todos.map((todo, id) => {
        return (
            <Item deleteItemById={deleteItemById} id={id} todo={todo}/>
        )
    })

    return (
        <div className="app">
            <h1 style={{textAlign: "center"}}>Список дел</h1>
            <input type='text' value={value} onChange={changeInput}/>
            <button type='text' onClick={addTodo}>Add</button>
            <p>{result}</p>
        </div>
    )
}


