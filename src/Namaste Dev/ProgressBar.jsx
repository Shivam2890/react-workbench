import React, { useEffect, useState } from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0)
    const [bgColor, setBgColor] = useState('red')

    function handleIncrement() {
        if (progress > 90) {
            return
        }
        setProgress(prev => prev + 10)
    }

    function handleDecrement() {
        if (progress <= 0) {
            return
        }
        setProgress(prev => prev - 10)
    }
    useEffect(() => {
        if (progress < 40) {
            setBgColor("red")
        } else if (progress >= 40 && progress < 80) {
            setBgColor("orange")
        } else {
            setBgColor('green')
        }
    }, [progress])

    return (
        <div>
            <div style={{
                width: '500px',
                height: '30px',
                border: '2px solid white'
            }}>
                <div
                    style={{
                        width: `${progress}%`,
                        height: '30px',
                        background: `${bgColor}`
                    }}></div>
            </div>

            <br />
            <button className="w-2xs border" onClick={handleIncrement}>+10</button>
            <button className="w-2xs border" onClick={handleDecrement}>-10</button>
        </div>
    );
};

export default ProgressBar;
