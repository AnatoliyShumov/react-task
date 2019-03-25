import Slider from "react-slick/lib";
import React from 'react';

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
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {this.props.images.map((img, i, arr) => {
                        return <div key={this.props.id}>
                            <img src={img} alt="" className="src"/>
                        </div>
                    })}
                </Slider>
            </div>
        );
    }
}

export default  SimpleSlider