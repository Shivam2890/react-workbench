import React, { useState } from 'react'

const users = [
    { id: 1, name: "John Doe", email: "john@gmail.com" },
    { id: 2, name: "Jane Smith", email: "jane@gmail.com" },
    { id: 3, name: "Robert Brown", email: "robert@gmail.com" },
    { id: 4, name: "Alice Johnson", email: "alice@gmail.com" },
    { id: 5, name: "David Wilson", email: "david@gmail.com" },
    { id: 6, name: "Emily Davis", email: "emily@gmail.com" },
    { id: 7, name: "Shivam Kori", email: "shivam@gmail.com" },
    { id: 8, name: "Michael Lee", email: "michael@gmail.com" },
    { id: 9, name: "Sarah Taylor", email: "sarah@gmail.com" },
    { id: 10, name: "James Anderson", email: "james@gmail.com" },
    { id: 11, name: "Olivia Thomas", email: "olivia@gmail.com" },
    { id: 12, name: "William Jackson", email: "william@gmail.com" },
    { id: 13, name: "Sophia White", email: "sophia@gmail.com" },
    { id: 14, name: "Daniel Harris", email: "daniel@gmail.com" },
    { id: 15, name: "Emma Martin", email: "emma@gmail.com" },
    { id: 16, name: "Emma Martin", email: "emma@gmail.com" },
];

const Pagination2 = () => {
    const [currPage, setCurrPage] = useState(0)

    const totalPages = Math.ceil(users.length / 5)
    const itemPerPage = 5
    const startIndex = itemPerPage * currPage
    const endIndex = itemPerPage + startIndex

    console.log(currPage, 'curr')
    return (
        <div>
            <div className='h-screen flex flex-col items-center'>
                {users.slice(startIndex, endIndex).map((item) => (
                    <div key={item.id}
                        className='w-full max-w-150 px-4 bg-amber-100 flex justify-center gap-3 pb-2 border m-2 rounded-2xl'>
                        <p>{item.id}</p>
                        <h2>{item.name}</h2>
                        <h3>{item.email}</h3>
                    </div>
                ))}
            </div>

            <div className='fixed bg-amber-200 bottom-0 left-0 w-full h-10'>
                <div className='flex justify-center gap-4'>
                    <button
                        onClick={() => setCurrPage(prev => prev - 1)}
                        disabled={currPage <= 0}
                    >Prev</button>

                    {Array.from({ length: totalPages }, (_, i) =>
                        <button key={i}
                            aria-current={currPage}
                            onClick={() => setCurrPage(i)}
                            className={currPage === i ? 'bg-white text-black px-3 py-1 rounded' : 'px-3 py-1 rounded'}
                        >{i + 1}</button>)}


                    <button
                        onClick={() => setCurrPage(prev => prev + 1)}
                        disabled={currPage >= totalPages - 1}
                    >Next</button>
                </div>
            </div>
        </div>
    )
}

export default Pagination2