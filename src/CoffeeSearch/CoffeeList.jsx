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
        <center>
            here the list hava to fillter

            {coffees.length === 0 ? <center>Please Enter right coffee</center> : coffeeTitle}

        </center>
    )
}

export default CoffeeList