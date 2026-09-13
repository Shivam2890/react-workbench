import React, { useEffect, useState } from 'react'

const DebounceSimple = () => {
    const [normal, setNormal] = useState("")
    const [debounce, setDebounce] = useState("")


    function handleChange(e) {
        setNormal(e.target.value)
    }

    //debounce in useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(normal)
        }, 1000)

        return () => {
            clearTimeout(timer)
        }

    }, [normal])
    return (
        <div>
            <center>
                <input type="text" onChange={handleChange} />

                <h2>NORMAL : {normal}</h2>
                <h2>DEBOUNCE : {debounce}</h2>
            </center>
        </div>
    )
}

export default DebounceSimple