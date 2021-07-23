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
        const result = [...addList];
        result.splice(id, 1);
        setAddList(result)
    }

    return (
        <div className="app">
            <h1 style={{textAlign: "center"}}>Список дел</h1>
            <Input style={{width: '400px'}} placeholder="Введи новое событие"
                   value={value}
                   onChange={hendleItem}/>
            <Button type="primary"
                    onClick={hendleAddList}>Добавить</Button>
            <Button style={{marginLeft: '5px', backgroundColor: "tomato"}} type="primary"
                    onClick={hendleDeleteList}>Удалить</Button>
            <p style={{margin: '10px 0 0 10px', fontSize: '15px'}}>
                {result}
            </p>
        </div>
    );
}