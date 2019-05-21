import React from 'react';

const Product = (props) => (
	// return some product data
	<div className="col-item md-cover-6 md-cover-4 lg-cover-2">
		{props.productInfo.name}
	</div>
);

export default Product;