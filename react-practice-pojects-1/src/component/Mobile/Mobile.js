import React, { useState } from 'react';
import './Mobile.css'
const battery = {
    border: '2px solid',
    width: '50px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px'
}
const Mobile = () => {
    const [count, setCount] = useState(100);

    const batteryCount = () => {
        if (count === 30) { document.getElementById('battery').style.backgroundColor = "red" }
        else if (count === 0) {
            return
        }
        const newCount = count - 10;
        setCount(newCount)
    }
    return (
        <div>
            <div className='mobile'>
                <p style={battery} id="battery">{count}%</p>
            </div>
            <button onClick={batteryCount}>Battery down</button>
        </div>
    );
};

export default Mobile;