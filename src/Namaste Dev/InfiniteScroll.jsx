import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const InfiniteScroll = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)

    const loaderRef = useRef()
    console.log(loaderRef.current, 'reff')
    const fetch = async () => {
        const fetchData = await axios.get('https://dummyjson.com/users')
        setData(prev => [...prev, ...fetchData.data.users.slice(page, page + 10)])
        setLoading(false)
    }
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading) {
                setLoading(true)
                setPage(prev => prev + 10)
                console.log('triggerss', page)
            }
        })
        observer.observe(loaderRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        fetch()
    }, [page])

    // console.log(data, 'data')
    return (
        <div>
            <center>
                {data.map((item, i) => (
                    <div key={item.id}>
                        <p>{item.id}</p>
                        <img src={item.image} alt="" />
                        <h1>{item.firstName}</h1>
                    </div>
                ))}
                <div ref={loaderRef}></div>
                {/* <button onClick={() => setPage(prev => prev + 10)}>Click 10</button> */}
            </center>
        </div>
    )
}

export default InfiniteScroll