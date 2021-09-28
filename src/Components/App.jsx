import React, { useState } from 'react';
import SmallAnimal from './SmallAnimal';
import getId from '../Shared/id';
function App() {

    const [animals, setAnimals] = useState([]);
    const [cowInput, setCowInput] = useState('');
    const addAnimal = (a) => {
        const animal = {id: getId(), color: cowInput, animal: a};
        const newAnimals = animals.slice();
        newAnimals.push(animal);
        setAnimals(newAnimals);
    }

    const deleteAnimal = (id) => {
        const newAnimals = animals.slice();
        for (let i = 0; i < newAnimals.length; i++) {
            if (newAnimals[i].id === id) {
                newAnimals.splice(i, 1);
                break;
            }
        }
        setAnimals(newAnimals);
    }

    const editAnimal = (id, color) => {
        const newAnimals = animals.slice();
        for (let i = 0; i < newAnimals.length; i++) {
            if (newAnimals[i].id === id) {
                newAnimals[i].color = color;
                break;
            }
        }
        setAnimals(newAnimals);
    }

    const cowInputHandler = (e) => {
        setCowInput(e.target.value);
    }

    return (
        <>
            {animals.map(b => <SmallAnimal key={b.id} delete={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} />)}
            <div>
                <input type="text" value={cowInput} onChange={cowInputHandler} />
                <button className="input-button" onClick={() => addAnimal('cow')}>Add Cow</button>
                <button className="input-button" onClick={() => addAnimal('sheep')}>Add Sheep</button>
            </div>
        </>
    );
}

    
export default App;