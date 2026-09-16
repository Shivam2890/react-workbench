import React, { useEffect, useState } from 'react'
import CoffeeFilter from './CoffeeFilter'
import CoffeeList from './CoffeeList'
import axios from 'axios'

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

    const filterData = coffees.filter((coffee) => coffee.title.toLowerCase().includes(debounceInput.toLowerCase()))
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceInput(input)
        }, 1000);
        fetchData()

        return () => {
            clearTimeout(timer)
        }
    }, [input])
    return (
        <center>
            <h2>Here's Your Coffee</h2>
            <CoffeeFilter input={input} setInput={setInput} />
            <CoffeeList coffees={filterData} />
        </center>
    )
}

export default Coffee