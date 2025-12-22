import "./coffee-card.css"

const CoffeeCard = (props) => {
    const {
        name,
        country,
        img,
        price,
    } = props
    
    return (
        <div className="card">
            <div className="coffee__card-item">
                <img className="coffee__card-img" src={img} alt="coffee_card-img" />
                <h3 className="coffee__card-title">{name}</h3>
                <p className="coffee__card-country">{country}</p>
                <p className="coffee__card-price">{price}</p>
            </div>
        </div>
    )
}

export default CoffeeCard;