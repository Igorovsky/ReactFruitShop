import React, { Component } from 'react';
import ProductList from './component/ProductList/ProductList';
import './App.scss';

class App extends Component {

  // prepare for states
  state = {
    compareProducts : []
  }

  // select function
  selectProductFn = (prod) => {

    this.setState((state) => {
      const list = state.compareProducts.concat(prod);

      return {
        products: state.products,
        compareProducts: list
      };
    });
  }
  
  render() {
    return (
      <span you-dont-need-me>
        <ProductList selectMe={this.selectProductFn.bind(this)} />
        <div className="row-grid">
          <p>Compare Products:</p>
          <ul>
            {
              this.state.compareProducts.map((product) => {
                return <li>{product.name}</li>
              })
            }
          </ul>
        </div>
      </span>
    )
  }

}

export default App;
