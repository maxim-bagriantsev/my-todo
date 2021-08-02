import React from 'react';

export const Item = ({deleteItemById, id, todo}) => {
    return (
        <div>
            <p key={id}>{id + 1}. {todo}
                <button onClick={() => deleteItemById(id)}>X</button>
            </p>
        </div>
    )
}