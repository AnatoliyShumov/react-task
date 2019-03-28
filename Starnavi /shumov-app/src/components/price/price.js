import React from 'react'
import './price.scss'
const Price = ({price}) => {
    return (
        <div className="price__menu-info">
            <p>{price}</p>
            <i className="fas fa-hryvnia"></i>
        </div>

    )
}

export default Price