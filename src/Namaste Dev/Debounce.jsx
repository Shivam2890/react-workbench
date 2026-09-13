import React, { useCallback, useState } from 'react'

const Debounce = () => {
    const [normal, setNormal] = useState("")
    const [debounce, setDebounce] = useState("")

    function debounceFn(fn, t = 1000) {
        let delay
        return function (...args) {
            clearTimeout(delay)
            delay = setTimeout(() => fn(...args), t)
        }
    }

    const debounceRequest = useCallback((val) => {
        handleChangeDebounce(val)
    }, [])

    const handleChangeDebounce = debounceFn((val) => setDebounce(val), 1000)
    function handleChange(e) {
        setNormal(e.target.value)
        debounceRequest(e.target.value)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <center>
                <p>one for the normal input</p>
                <p>one with the debounce</p>

                <input type="text" onChange={(e) => handleChange(e)} />

                <h2>NORMAL : {normal}</h2>
                <h2>DEBOUNCE : {debounce}</h2>
            </center>
        </div>
    )
}

export default Debounce