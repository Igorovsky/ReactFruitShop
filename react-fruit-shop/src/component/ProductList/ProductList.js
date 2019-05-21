import React, {	Component	} from 'react';
import 'whatwg-fetch';
import Product from '../Product/Product';

class ProductList extends Component {

	state = {
		products : []
	}

	// fetch the products
	// rendered to the DOM for the first time, runs after the component output has been rendered
	componentDidMount() {
	    fetch('https://my-json-server.typicode.com/Igorovsky/my-json-mock-server/items')
	          .then(response =>  response.json())
	          .then(json => this.setState({ products : json[0].fruit }));
	}

	// render a list of all the products
	render() {
		return (
			<div className="row-grid">
				{
					this.state.products.map((product) => {
						return <Product productInfo={product} 
										key={product.id} 
										{...this.props} />
					})
				}
			</div>
		)	
	}
}

export default ProductList;