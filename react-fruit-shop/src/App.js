import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.scss';

class App extends Component {

  // prepare for states
  state = {
    fruits : []
  }
  
  // init method
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/Igorovsky/my-json-mock-server/items')
          .then(response =>  response.json())
          .then(json => this.setState({ fruits : json[0].fruit }));
  }

  // render method for this component
  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Fruit Shop
        </header>

        <div className="row-grid">
            <div className="col-item md-cover-2 lg-cover-4">
              There are { this.state.fruits.length  } fruits :)
            </div>
          </div>

          <div className="row-grid">
            <div className="col-item sm-cover-1">
              xs-1
            </div>
            <div className="col-item sm-cover-2">
              xs-2
            </div>
            <div className="col-item sm-cover-3">
              xs-3
            </div>
            <div className="col-item sm-cover-6">
              
              <div className="row-grid">
                <div className="col-item md-cover-4 lg-cover-6">
                  A
                </div>
                <div className="col-item md-cover-8 lg-cover-6">
                  B
                </div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
