import React from 'react'

const StarRating2 = () => {

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    className='w-5'
                    
                >
                    ★
                </button>
            ))}
        </div>
    )
}

export default StarRating2