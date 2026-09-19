import React, { useEffect, useState } from 'react'


const ProductCart = ({ id, image, title }) => {

    return (
        <div className=''>
            <span>{id}</span>
            <img src={image} alt={title} />
            <span>{title}</span>
        </div>
    )
}

const NamastePagination = () => {
    const [products, setProducts] = useState([])
    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products?limit=200')
        const json = await data.json()
        setProducts(json.products)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return !products.length ? <center>No Product is Here</center> :
        (
            <div>
                <div className='flex flex-wrap gap-1.5'>
                    {products.map((item) => (
                        <div key={item.id} className=''>
                            <ProductCart
                                key={item.id}
                                id={item.id}
                                image={item.thumbnail}
                                title={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        )
}

export default NamastePagination