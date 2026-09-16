import React, { useEffect, useMemo, useState } from 'react'
import CoffeeFilter from './CoffeeFilter'
import CoffeeList from './CoffeeList'
import axios from 'axios'
import { debounceFn } from './coffeeDebounce.js'

const Coffee = () => {
    const [coffees, setCoffees] = useState([])
    const [input, setInput] = useState("")
    const [debounceInput, setDebounceInput] = useState("")

    async function fetchData() {

        try {
            const data = await axios('https://api.sampleapis.com/coffee/iced')
            setCoffees(data.data)
        } catch (error) {
            console.log(error, 'error while fetching')
        }
    }

    const filterData = coffees.filter((coffee) =>
        coffee.title
            .toLowerCase()
            .includes(debounceInput.toLowerCase())
    )

    const handleDebounce = useMemo(
        () =>
            debounceFn((val) => setDebounceInput(val), 1000)
        ,
        [])

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        handleDebounce(input)
    }, [input])

    return (
        <center className='pb-3'>
            <h2>Here's Your Coffee</h2>
            <CoffeeFilter input={input} setInput={setInput} />
            <CoffeeList coffees={filterData} />
        </center>
    )
}

export default Coffee