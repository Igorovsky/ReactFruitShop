import React, { Component } from 'react';
import ProductList from './component/ProductList/ProductList';
import './App.scss';

class App extends Component {

  // prepare for states
  state = {
    compareProductsList : [],
    compareProductsLimit : 2
  }

  // select function
  selectProductFn = (prod) => {

    // check max products selected
    if(this.state.compareProductsList.length < this.state.compareProductsLimit){
      // you can add the product to the comparison
      this.setState((state) => {
        const list = state.compareProductsList.concat(prod);

        return {
          compareProductsList: list
        };
      });
    }else{
      // you've selected too much products
      const list = [...this.state.compareProductsList];
      const index = list.indexOf(prod);
      // check if the product has been selected
      if (index !== -1) {
        // product is already selected
        alert("You have already selected the product: "+prod.name);
      }else{
        // product is new, so add it to the selection
        list.splice(0, 1);
        list.push(prod);
        this.setState((state) => ({ compareProductsList: list }));
      }
    }

  }
  
  render() {
    return (
      <div className="row-grid">
        <div className="col-item sm-cover-12">
          <ProductList selectProduct={this.selectProductFn.bind(this)} />
        </div>
        <div className="col-item sm-cover-12">
          <div className="row-grid">
            <div className="col-item sm-cover-12">
              <p>Compare Products:</p>
              <ul>
                {
                  this.state.compareProductsList.map((product) => {
                    return <li>{product.name}</li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>  
      </div>
    )
  }

}

export default App;
