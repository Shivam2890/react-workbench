import React from 'react'

const CoffeeTitle = ({ name, image, description }) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}  height="100px" width="100px"/>
            <p>{description}</p>
        </div>
    )
}

export default CoffeeTitle