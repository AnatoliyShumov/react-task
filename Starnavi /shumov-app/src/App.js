import React, { Component } from 'react';
import './App.scss';
import axios from "axios";
import SimpleSlider from "./components/slider/simpleSlider"
import Description from "./components/description/description"
import Price from "./components/price/price"
import FullAddress from "./components/full_adress/full_adres"
import Rate from "./components/rate/rate"
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
    return (
      <div className="App">
          <div className="container__apartments">
                  {posts.map(post => {
                      const {id, images, price, description, area, full_address, rating} = post;
                      return <React.Fragment>
                          <div className="menu__apartments">
                              <SimpleSlider  key={id} images={images} rating={rating}id={id}/>
                              <div className="menu-info__apartments">
                                  <Description description={description}/>
                                  <FullAddress full_address={full_address}/>
                              </div>
                                  <Price price={price}/>
                                  <Rate rating={rating}/>
                          </div>
                      </React.Fragment>
                  })}
          </div>
      </div>
    );
  }
}

export default App;
