import React from 'react';
import './description.scss'
const Description = ({description}) => {
    return (
        <div className="description__menu-info">
            <i className="fas fa-info"></i>
            <p>{description}</p>
        </div>
    )
}

export default Description