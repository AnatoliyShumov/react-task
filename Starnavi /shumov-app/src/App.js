import React, { Component } from 'react';
import './App.scss';
import axios from "axios";
import Tamplates from "./components/templates/templates";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentWillMount() {
        axios.all([
            axios.get('http://demo4452328.mockable.io/properties'),
            axios.get('http://demo4452328.mockable.io/templates')
        ])
            .then(axios.spread((propertiesRes, templatesRes) => {
                const posts = propertiesRes.data.data;
                const tamplates = templatesRes.data;
                this.setState({tamplates})
                this.setState({
                    posts: posts,
                    tamplates
                })
            }))
            .catch(err => console.log(err));
    }
    randomNumber = () =>{
        return Math.round(Math.random() * (3 - 1) + 1);
    }
  render() {
         const {posts} = this.state;
    return (
      <div className="App">
          <div className="container__apartments">
                  {posts.map(post => {
                      const {tamplates} = this.state
                      return <React.Fragment >
                          <Tamplates posts={post} randomTamplates={this.randomNumber()} tamplates={tamplates}/>
                      </React.Fragment>
                  })}
          </div>
      </div>
    );
  }
}

export default App;
