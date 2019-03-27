import React from 'react'
import './price.scss'
const Price = ({price}) => {
    return (
        <div className="price__menu-info">
            <i className="fas fa-hryvnia"></i>
            <p>{price}</p>
        </div>

    )
}

export default Price