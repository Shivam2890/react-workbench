import React, { useEffect, useState } from 'react'


const ProductCart = ({ id, image, title }) => {

    return (
        <div className='bg-amber-200 border m-1.5 w-48 p-2.5 mt-2 overflow-hidden'>
            <span>{id}</span>
            <img src={image} alt={title} />
            <span>{title}</span>
        </div>
    )
}
const PAGE_SIZE = 10

const NamastePagination = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(17)

    const totalProducts = products.length
    const noOfPages = Math.ceil(totalProducts / PAGE_SIZE)

    const startIndex = currentPage * PAGE_SIZE
    const endIndex = startIndex + PAGE_SIZE

    const fetchData = async () => {
        try {
            const data = await fetch('https://dummyjson.com/products?limit=200')
            const json = await data.json()
            setProducts(json.products)
        } catch (error) {
            console.log(error, 'err while fetching')
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return !products.length ? <center>No Product is Here</center> :
        (
            <div>
                <h1 className='text-3xl w-full text-center m-5 p-1.5 border'>Pagination</h1>

                <div className='flex gap-2.5 justify-center bg-amber-100 p-2'>
                    <button
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        disabled={currentPage <= 0}
                    >Prev</button>

                    {[...Array(noOfPages).keys()].map((i) => (
                        <button
                            key={i}
                            className={`text-2xl border rounded p-2 cursor-pointer ${i === currentPage ? 'bg-fuchsia-100 text-cyan-100' : ''} `}
                            onClick={() => setCurrentPage(i)}
                        >{i + 1}</button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        disabled={currentPage >= noOfPages - 1}
                    >Next</button>
                </div>

                <div className='flex flex-wrap gap-1.5'>
                    {products.slice(startIndex, endIndex).map((item) => (
                        <div key={item.id} className=''>
                            <ProductCart
                                key={item.id}
                                id={item.id}
                                image={item.thumbnail}
                                title={item.title} />
                        </div>
                    ))}
                </div>
            </div >
        )
}

export default NamastePagination