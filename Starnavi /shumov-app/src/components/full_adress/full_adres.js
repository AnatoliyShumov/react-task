import React from 'react'
import './fullAddress.scss'
const FullAddress = ({full_address})=> {
    return (
        <div className="full-address__menu-info">
            <i className="fas fa-map-marker-alt"></i>
            <p>{full_address}</p>
        </div>
    )
}

export default FullAddress