import React, { useState } from 'react'

const StarRating = ({
    filled = false,
    size = 24,
    color = "#FFD700",
    className = ""

}) => {

    const [rating, setRating] = useState(null)
    console.log(rating, 'rainting')
    return (
        <div>
            <div className='flex'>
                {[1, 2, 3, 4, 5].map((item, i) =>
                    <div key={i} className='flex gap-1 m-1'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={size}
                            height={size}
                            viewBox="0 0 24 24"
                            fill={rating >= i ? color : ""}
                            stroke={color}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={className}
                            onClick={() => setRating(i)}
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                    </div>)}

                    <div>Rating : {rating+1} / 5</div>

            </div>
        </div>
    )
}

export default StarRating