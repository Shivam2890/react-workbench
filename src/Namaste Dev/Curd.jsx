import axios from 'axios'
import React, { useState } from 'react'

const Curd = () => {
    const [data, setData] = useState([])
    const fetch = async () => {
        const data = await axios('https://dummyjson.com/products')
    }
    return (
        <div>Curd</div>
    )
}

export default Curd