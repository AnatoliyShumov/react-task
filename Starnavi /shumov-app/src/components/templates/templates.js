import React from 'react';
import SimpleSlider from "../slider/simpleSlider";
import Description from "../description/description";
import FullAddress from "../full_adress/full_adres";
import Price from "../price/price";
import Rate from "../rate/rate";
import PropTypes from "prop-types";
import style_1 from "./tamplates_1.module.scss"
import style_2 from "./tamplates_2.module.scss"
import style_3 from "./tamplates_3.module.scss"


const propTypes = {

    posts: PropTypes.number.isRequired,
}
class Tamplates  extends React.Component {
    constructor(props) {
        super(props);
        const {randomTamplates} = this.props;
        this.state = {
            randomTamplates
        };
    }


    render(){
        const {id, images, price, description, area, full_address, rating} = this.props.posts;
        const {randomTamplates} = this.props;
        const {tamplates} = this.state
        if(randomTamplates === 1 ) {
            return <React.Fragment >
                <div className={style_1.menu__apartments}>
                    <SimpleSlider  key={id} images={images} rating={rating} id={id}/>
                    <div className="menu-info__apartments">
                        <Description description={description}/>
                        <FullAddress full_address={full_address}/>
                    </div>
                    <Price  price={price}/>
                    <Rate  rating={rating}/>
                </div>
            </React.Fragment>
        }

       else if(randomTamplates === 2 ) {
            return <React.Fragment >
                <div className={style_2.menu__apartments}>
                    <div className="menu__apartments-slider">
                        <FullAddress full_address={full_address}/>
                        <SimpleSlider  key={id} images={images} rating={rating} id={id}/>
                    </div>
                    <div className="menu-info__apartments">
                        <Description description={description}/>
                    </div>
                    <Price price={price}/>
                    <Rate rating={rating}/>
                </div>
            </React.Fragment>
        }
        else if (randomTamplates === 3 ) {
            return <React.Fragment >
                <div className={style_3.menu__apartments}>
                    <div className="menu__apartments-slider">
                        <FullAddress full_address={full_address}/>
                        <SimpleSlider randomTamplates={randomTamplates} price={price} key={id} images={images} rating={rating} id={id}/>
                    </div>
                    <div className="menu-info__apartments">
                        <Description description={description}/>
                    </div>
                    <Rate rating={rating}/>
                </div>
            </React.Fragment>
        }
    }
}
Tamplates.propTypes = propTypes;
export default Tamplates