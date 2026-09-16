import React from 'react'
import CoffeeTitle from './CoffeeTitle'

const CoffeeList = ({ coffees }) => {

    const coffeeTitle = coffees.map((coffee) => <CoffeeTitle
        key={coffee.id}
        name={coffee.title}
        image={coffee.image}
        description={coffee.description}
    />)
    return (
        <div>
            here the list hava to fillter
            {coffeeTitle}
        </div>
    )
}

export default CoffeeList