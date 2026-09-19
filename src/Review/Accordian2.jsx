import React, { useState } from 'react'

const faqs = [
    {
        id: 1,
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces."
    },
    {
        id: 2,
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript."
    },
    {
        id: 3,
        question: "What is useState?",
        answer: "useState is a React Hook that allows functional components to manage state."
    },
    {
        id: 4,
        question: "What is useEffect?",
        answer: "useEffect is a React Hook used to perform side effects in a component."
    }
];
const Accordian2 = () => {
    const [open, setOpen] = useState([])

    function handleClick(id) {
        setOpen(prev => {
            if (prev.includes(id)) {
                return prev.filter(itemId => itemId !== id)
            }
            return [...prev, id]
        })
    }
    return (
        <div>
            <div className='text-center flex flex-col gap-2.5 '>

                <span
                    onClick={() => setOpen(faqs.map
                        (item => item.id)
                    )}
                    className='cursor-pointer'
                >Expand</span>

                <span
                    onClick={() => setOpen([])}

                    className='cursor-pointer'
                >Collapse</span>

                {faqs.map((item) => (
                    <div key={item.id} className='border bg-amber-100 m-2.5' >
                        <h2
                            className='p-2.5 cursor-pointer'
                            onClick={() => handleClick(item.id)}
                        >{item.question}</h2>
                        {open.includes(item.id) && <p>{item.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accordian2