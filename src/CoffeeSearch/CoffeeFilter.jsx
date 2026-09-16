import React from 'react'

const CoffeeFilter = ({ input, setInput }) => {
    return (
        <div>
            Search <input
                type="text"
                placeholder='Please Search Taste of Hell Coffee'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    )
}

export default CoffeeFilter