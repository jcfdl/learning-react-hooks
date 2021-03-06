import React, {useState, useEffect} from 'react';

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, []) //add empty array to run only once

    return (
        <div>
            X: {x} | Y: {y}
        </div>
    )
}

export default HookMouse;
