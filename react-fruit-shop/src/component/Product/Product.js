import React from 'react';
import './Product.scss';

const Product = (props) => (


	// return some product data
	<div className="col-item sm-cover-12 md-cover-4 lg-cover-2">
		<div className="productWrapper boxShadow">
			<div className="imageWrapper">
				<div className="row-grid clearPadding">
					<div className="row-item lg-cover-12">
						<img src={props.productInfo.image} alt={props.productInfo.description}/>
					</div>
				</div>
			</div>
			<div className="row-grid stickToBottom">
				<div className="col-item lg-cover-6 bigText">
					<p>{props.productInfo.name}</p>
				</div>
				<div className="col-item lg-cover-6 boldText bigText greenText alignRightImportant">
					<p>${props.productInfo.price}</p>
				</div>
				<div className="col-item lg-cover-12 greyText">
					<p>{props.productInfo.description}</p>
				</div>
			</div>
			<span className="overlay">
				<div className="centerElement">
					<button className="selectBtn boldText greenText" onClick={() => props.selectProduct(props.productInfo)}>COMPARE</button>
				</div>
			</span>
		</div>
	</div>
);

export default Product;