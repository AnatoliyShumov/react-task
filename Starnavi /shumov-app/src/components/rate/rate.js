import React from 'react'
import './rate.scss';
const Rate = ({rating}) => {
const renderRating = () =>{
    if(rating < 80 && rating > 50) {
        return <React.Fragment>
            <p className="rate-text">Хорошо</p>
            <p className="rate-number">{rating}</p>
        </React.Fragment>
    }
    else if (rating > 95) {
        return <React.Fragment>
            <p className="rate-text">Великолепно </p>
            <p className="rate-number">{rating}</p>
        </React.Fragment>
    }
    else if (rating < 101 && rating > 90) {
        return <React.Fragment>
            <p className="rate-text">Отлично</p>
            <p className="rate-number">{rating}</p>
        </React.Fragment>
    }
    else if (rating < 50) {
        return <React.Fragment>
            <p className="rate-text">Плохо</p>
            <p className="rate-number">{rating}</p>
        </React.Fragment>
    }

    else{
        document.querySelectorAll(".rate__menu-info").innerHTML = "";
    }
}
    return(
        <div className="rate__menu-info">{renderRating()}</div>
    )
}

export default Rate
