import React, { Component } from 'react';
import './App.css';
import axios from "axios";


class Images extends Component {

    render() {
    // this.props.posts.map(posts=>{console.log(posts)})
        return (
            "a"
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
                      return <Images images={post.images}/>
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
