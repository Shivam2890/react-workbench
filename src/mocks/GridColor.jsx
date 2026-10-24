import React, { useState } from 'react'
import './gridStyle.css';

const GridColor = () => {
    // const [grid, setGrid] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    const [arr, setArr] = useState([])

    const handleActve = (id) => {
        // setArr(prev => prev.includes(id) ? prev : [...prev, id])

        if (arr.includes(id)) {
            return
        }

        const next = [...arr, id]

        setArr(next)
        if (next.length === data.flat().length) {
            console.log(next, 'after')
            remove()
        }
    }

    function remove() {
        // for(let i=0;i<9;i++){
        let timer = setInterval(() => {
            setArr(prev => {
                let next = (prev.slice(0, prev.length - 1))
                if (next.length == 0) {
                    clearInterval(timer)
                }
                return next
            })
            // console.log(arr, "settimeout")
        }, 300);
        // }
    }

    console.log(arr, 'acitve')
    return (
        <div className='outer'>
            {data.map((row) => (
                <div className='inner' key={row}>
                    {row.map((num) => (
                        <div
                            key={num}
                            className={arr.includes(num) ? 'active' : ''}
                            onClick={() => handleActve(num)}
                        >
                            {num}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default GridColor