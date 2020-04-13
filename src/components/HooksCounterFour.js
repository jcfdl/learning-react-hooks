import React, {useState} from 'react';

function HooksCounterFour() {
    const [items, setItems] = useState([])

    const addNumber = () => {
        setItems([
            ...items,
            {
                id: items.length,
                number: Math.floor(Math.random() * 10) + 1
            }
        ])
    }
    return (
        <div>
            <button onClick={addNumber}>Add a number</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.number}</li>)
                }
            </ul>
        </div>
    )
}

export default HooksCounterFour;
