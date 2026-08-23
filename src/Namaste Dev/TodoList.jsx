import React, { useState } from 'react'

const TodoList = () => {
    const [input, setInput] = useState("")
    const [todo, setTodo] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        if (input === "") return
        const data = [...todo, { id: Date.now(), text: input, complete: false }]
        setTodo(data)
        setInput('')
    }

    function handleDelete(index) {
        const data = todo.filter((item => item.id !== index))
        setTodo(data)
    }
    function handleToggle(idx) {

        const data = todo.map((item) => item.id === idx ? { ...item, complete: !item.complete } : item)

        setTodo(data)
    }

    console.log(todo, 'input')
    return (
        <div className="min-h-screen bg-gray-100 font-sans text-gray-900 antialiased flex items-start pt-20 justify-center">
            <div className='text-2xl font-bold'>

                {/* //1 create the form to take input in the string */}
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter Todo' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button type='submit'>Add</button>

                </form>

                {/* //1rendering the array of obj into the list */}
                {todo.map((item) => (
                    <div key={item.id}>
                        <ul className="flex justify-between items-center" key={item.id}>
                            {/* //implement the strike-through */}
                            <li className='flex items-center gap-4 px-2.5' >

                                {/* ///checkbox  */}
                                <input type="checkbox" checked={item.complete} onChange={() => handleToggle(item.id)} />

                                <span className={`${item.complete ? 'line-through' : ''}`}>{item.text}</span>
                                {/* // delete funcitonality */}
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </li>
                        </ul>
                    </div>
                ))
                }

            </div >

        </div >
    )
}

export default TodoList