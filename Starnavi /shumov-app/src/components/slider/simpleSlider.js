import Slider from "react-slick/lib";
import React from 'react';
import './slider.scss'
import Price from "../price/price";

class SimpleSlider extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            // arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true
        };
        const{id, price, randomTamplates} = this.props;
if(randomTamplates === 3) {
    return (
        <div className="slider__menu-info" >
            <Slider  ref={c => (this.slider = c)} {...settings}>
                {this.props.images.map((img, i, arr) => {
                    return <div key={id}>
                        <Price randomTamplates={randomTamplates} price={price}/>
                        <img src={img} alt="" className="src"/>
                    </div>
                })}
            </Slider>
        </div>
    );
}
else{
    return (
        <div className="slider__menu-info" >
            <Slider  ref={c => (this.slider = c)} {...settings}>
                {this.props.images.map((img, i, arr) => {
                    return <div key={id}>
                        <img src={img} alt="" className="src"/>
                    </div>
                })}
            </Slider>
        </div>
    );
}

    }
}

export default  SimpleSlider