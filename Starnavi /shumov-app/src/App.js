import React, { Component } from 'react';
import './App.scss';
import axios from "axios";
import SimpleSlider from "./components/slider/simpleSlider"
import Description from "./components/description/description"
import Price from "./components/price/price"
import Area from "./components/area/area"


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
                      const {id, images, price, description, area} = post;
                      return <React.Fragment>
                          <div className="menu__apartments">
                              <SimpleSlider key={id} images={images} id={id}/>
                              <div className="menu-info__apartments">
                                  <Description description={description}/>
                                  <Price price={price}/>
                                  <Area area={area}/>
                              </div>
                          </div>
                      </React.Fragment>
                  })}
          </div>
      </div>
    );
  }
}

export default App;
