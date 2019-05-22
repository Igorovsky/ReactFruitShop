import React from 'react';

const Product = (props) => (
	// return some product data
	<div className="col-item md-cover-6 md-cover-4 lg-cover-2">
		<div>
			<p>Name: {props.productInfo.name}</p>
			<p>Price: {props.productInfo.price}</p>
			<p>Desc: {props.productInfo.description}</p>
			<p>Color: //TODO</p>
		</div>
		<div>
			<button onClick={() => props.selectProduct(props.productInfo)}>SELECT</button>
		</div>
	</div>
);

export default Product;