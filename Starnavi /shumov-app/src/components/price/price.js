import React from 'react'
import style_2 from './price_2.module.scss'
import style_3 from './price_3.module.scss'
const Price = ({price, randomTamplates}) => {
    if(randomTamplates === 3) {
        return (
            <div className={style_3.price}>
                <p>{price}</p>
                <i className="fas fa-hryvnia"></i>
            </div>

        )

    }
    else {
        return (
            <div className={style_2.price}>
                <p>{price}</p>
                <i className="fas fa-hryvnia"></i>
            </div>

        )
    }
}

export default Price