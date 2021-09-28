import React, { useState } from 'react';
function SmallAnimal(props) {

    const [editInput, setEditInput] = useState('');
    const editInputHandler = (e) => {
        setEditInput(e.target.value);
    }

    return (
        <div className="small-circle" style={{
            backgroundColor: props.color,
            borderRadius: props.animal == 'cow' ? '50%' : '5px'
        }}>
            <span>{props.color}</span>
            <button className="input-button-small" onClick={() => props.delete(props.id)}>Go Home</button>
            <div className="center">
                <input type="text" value={editInput} onChange={editInputHandler} />
                <button className="input-button-small" onClick={() => props.edit(props.id, editInput)}>Edit Color</button>
            </div>
        </div>);
}

export default SmallAnimal;