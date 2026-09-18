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

const Pagination = () => {
    const [pages, setPages] = useState(1)

    let itemPerPage = 5
    let totalPages = Math.ceil(users.length / itemPerPage)
    let startIndex = (pages - 1) * itemPerPage
    let endIndex = startIndex + itemPerPage

    return (
        <div className='h-screen'>
            <center className=''>
                {users.slice(startIndex, endIndex).map((item) => (
                    <div key={item.id} className='w-[600px] bg-amber-100 rounded-2xl m-2 border-2 ' >
                        <p>{item.id}</p><h2>{item.name}</h2>
                        <h3>{item.email}</h3>
                    </div>
                ))}
            </center>

            <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-4">
                <div className='flex justify-center gap-6'>

                    <button
                        onClick={() => setPages(prev => prev - 1)}
                        disabled={pages <= 1}
                    >Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => (
                        <button
                            key={i}
                            onClick={() => setPages(i)}
                            className={
                                pages === i ? 'bg-white text-black px-3 py-1 rounded' : 'px-3 py-1'
                            }
                        >{i}</button>
                    ))}

                    <button
                        onClick={() => setPages(prev => prev + 1)}
                        disabled={pages >= totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Pagination