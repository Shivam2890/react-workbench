import React, { useCallback, useState } from 'react'

const Debounce = () => {
    const [normal, setNormal] = useState("")
    const [debounce, setDebounce] = useState("")


    //debounce Fn (main)
    function debounceFn(fn, t = 1000) {
        let delay
        return function (...args) {
            clearTimeout(delay)
            delay = setTimeout(() => fn(...args), t)
        }
    }

    //useCallback
    const debounceRequest = useCallback((val) => {
        handleDebounce(val)
    }, [])

    //input handling
    function handleChange(e) {
        setNormal(e.target.value)

        //passing the input value in the useCallback fn
        debounceRequest(e.target.value)
    }

    //here calling the debounceFn by passing in the useCallback
    const handleDebounce = debounceFn((val) => setDebounce(val), 1000)

    return (
        <div>
            <center>
                <input type="text" onChange={(e) => handleChange(e)} />
                <h2>NORMAL : {normal}</h2>
                <h2>DEBOUNCE : {debounce}</h2>
            </center>
        </div>
    )
}

export default Debounce