import React, { useState } from 'react'


const Accordian = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const items = [
        {
            id: 1,
            title: "JavaScript Basics",
            content: "Learn variables, functions, and loops in JavaScript.",
        },
        {
            id: 2,
            title: "React.js Overview",
            content: "Understand components, state, and props in React.",
        },
        {
            id: 3,
            title: "Node.js",
            content: "Basics of server-side development with Node.js.",
        },
        {
            id: 4,
            title: "Full-Stack Development",
            content: "Build full-stack apps with React and Node.js.",
        },
    ]

    function handleToggle(index) {
        // if (index === openIndex) {
        //     setOpenIndex(null)
        //     return
        // }
        // setOpenIndex(index)

        // or 
        setOpenIndex(index === openIndex ? null : index)

    }

    return !items || (items.length === 0) ? "No Item Available" : (
        <div className='h-screen flex flex-col justify-center items-center'>
            {items.map((item) => (
                <div key={item.id} className='border w-2xl flex flex-col gap-2.5 mt-8'>
                    <h1 onClick={() => handleToggle(item.id)}>{item.title}</h1>
                    {openIndex === item.id && <p > {item.content}</p>} {/**use condetional operator */}
                    {/* icon up and down arrow */}
                </div>
            ))
            }
        </div >
    )
}

export default Accordian