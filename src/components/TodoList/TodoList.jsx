import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Input, Button} from 'antd';

export const TodoList = () => {
    const [value, setValue] = useState('') // тут будет лежать состояние введенное в input
    const [addList, setAddList] = useState([]) // состояние списка дел

    const result = addList.map((item, id) => {
        return <li
            key={id}>{item}
        </li>
    })

    const hendleItem = (event) => {
        setValue(event.target.value)
    };

    const hendleAddList = () => { // добавляем новый список дел
        setAddList([...addList, value])
    };

    const hendleDeleteList = (id) => { // удаляем список дел
        setAddList([
            ...addList.slice(0, id),
            ...addList.slice(id + 1)])
    }

    return (
        <div className="app">
            <h1>Список дел</h1>
            <Input style={{width: '20%'}} placeholder="Введи новое событие"
                   value={value}
                   onChange={hendleItem}/>
            <Button type="primary"
                    onClick={hendleAddList}>Добавить</Button>
            <Button style={{marginLeft: '5px', backgroundColor: "tomato"}} type="primary"
                    onClick={hendleDeleteList}>Удалить</Button>
            <p style={{marginTop: '10px', fontSize: '20px'}}>
                {result}
            </p>
        </div>
    );
}