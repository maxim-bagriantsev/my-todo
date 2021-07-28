import React from 'react';
import {DeleteOutlined} from "@ant-design/icons";
import {List} from 'antd';

export const Item = ({addNote, setAddNote, result}) => {

    const hendleDeleteList = (id) => { // удаляем список дел
        const result = [...addNote];
        result.splice(id, 1);
        setAddNote(result)
    }

    return (
        <List
            size="small"
            bordered
            dataSource={result.map(item => (
                <li key={item.id}>
                    {item.title} {item.value}
                    <DeleteOutlined
                        onClick={hendleDeleteList}
                        style={{color: 'red', fontSize: '20px'}}/>

                </li>
            ))}
            renderItem={item => <List.Item>{item}</List.Item>}
        />
    )
}