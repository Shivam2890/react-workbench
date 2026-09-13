import React, { useState } from 'react'

const ProgressBarComponent = ({ progress }) => {
    return <div style={{ textAlign: 'center' }}>
        <div style={{
            width: '500px',
            border: '2px solid black',
            height: '30px',
            borderRadius: '10px'

        }}
            //aisstive intervnet for the screen readers
            role='progressbar'
            aria-valuenow={progress}
            aria-valuemax='100'
            aria-valuemin='0'
        >
            <div style={{
                width: `${progress}%`,
                height: '30px',
                backgroundColor: 'green',
                borderRadius: '10px'
            }}>
                {progress}
            </div>
        </div>
    </div>
}

const ProgressBar1 = () => {
    const [val, setVal] = useState(0)


    function handleDecrement() {
        if (val < 10) {
            return
        }
        setVal(value => value - 10)
    }
    function handleIncrement() {
        if (val > 90) {
            return
        }
        setVal((value) => value + 10)
    }


    return (
        <div>
            <ProgressBarComponent progress={val} />
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={handleIncrement}>increment</button>
        </div>
    )
}

export default ProgressBar1