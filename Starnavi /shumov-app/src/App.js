import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Slider from "react-slick";


class SimpleSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    {this.props.images.map(img => {
                        return <div><img src={img} alt="" className="src"/></div>
                    })}
                </Slider>
            </div>
        );
    }
}
class Images extends Component {

    render() {
    // this.props.posts.map(posts=>{console.log(posts)})
        return (
            <img src={this.props.images[0]} alt="" className="src"/>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        axios
            .get(`http://demo4452328.mockable.io/properties`)
            .then(res => {
                const posts = res.data.data;
                this.setState({posts: posts})
            }

            )
            .catch(err => console.log(err))
    }

  render() {
         const {posts} = this.state;
         // let images = posts.map((post) => {
         //     post.id
         // });
     // const images = posts.map((post) => {
     //      return post.images
     //  })
       console.log()
    return (
      <div className="App">
          <div className="container__apartments">
              <div className="left-menu__apartments">
                {/*<Images images={images}/>*/}
                  {posts.map(post => {
                      return <SimpleSlider images={post.images}/>
                  })}
              </div>
              <div className="right-menu_apartments">
                  <p className="area__apartments"></p>
                  <p className="description__apartments"></p>
                  <p className="full-address__apartments"></p>
                  <p className="price__apartments"></p>
                  <p className="rating__apartments"></p>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
