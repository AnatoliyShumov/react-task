import React from 'react'
import style from './price.scss'
const Price = ({price}) => {
    return (
        <div className={style.ar}>
            <p className={style.ar}>{price}</p>
            <i className="fas fa-hryvnia"></i>
        </div>

    )
}

export default Price