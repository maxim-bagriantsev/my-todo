import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Input, Button} from 'antd';
import {Item} from './Item/Item';

export const TodoList = (props) => {
    const [value, setValue] = useState('') // тут будет лежать состояние введенное в input
    const [addNote, setAddNote] = useState([]) // состояние списка дел

    const result = addNote
        .map((_, i,value) => ({title: `Note: ${i + 1}`,id: i, value: `${value}`}))

    const hendleItem = (event) => {
        setValue(event.target.value)
    };

    const hendleAddList = () => { // добавляем новый список дел
        setAddNote([...addNote, value])
    };

    return (
        <div className="app">
            <h1 style={{textAlign: "center"}}>Список дел</h1>
            <Input style={{width: '700px'}} placeholder="Введи новое событие"
                   value={value}
                   onChange={hendleItem}/>
            <Button type="primary"
                    onClick={hendleAddList}>Добавить</Button>
            <Item addNote={addNote} setAddNote={setAddNote} result={result}/>
        </div>
    );
}