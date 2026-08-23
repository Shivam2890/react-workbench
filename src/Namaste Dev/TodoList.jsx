import React, { useState } from 'react'

const TodoList = () => {
    const [input, setInput] = useState('')
    


    console.log(input, 'input')
    return (
        <div className="min-h-screen bg-gray-100 font-sans text-gray-900 antialiased flex items-start pt-20 justify-center">
            <h1 className='text-2xl font-bold'>
                <form>
                    <input type="text" placeholder='Enter Todo' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button>Add</button>
                </form>

                <ul className="flex justify-between items-center">
                    <li>sadf</li><button>Delete</button>
                </ul>


            </h1>

        </div>
    )
}

export default TodoList