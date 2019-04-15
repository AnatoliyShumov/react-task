import React, { Component } from 'react';
import './App.scss';
import axios from "axios";
import Template from "./components/templates/templates";


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
                const template = templatesRes.data;
                this.setState({template})
                this.setState({
                    posts: posts,
                    template
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
                      const {template} = this.state
                      return <React.Fragment >
                          <Template posts={post} randomTemplate={this.randomNumber()} template={template}/>
                      </React.Fragment>
                  })}
          </div>
      </div>
    );
  }
}

export default App;
