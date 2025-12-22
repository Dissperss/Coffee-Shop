import CoffeeCard from "../coffee-card/coffee-card";

import "./app-coffee-cards.css"

const CoffeeList = ({ data }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps} = item
        return (
            <CoffeeCard
                key={id}
                {...itemProps}
            />
        )
    })


    return <ul className="coffee__list">{elements}</ul>
    
}

export default CoffeeList