import React from 'react';
import loaderSource from './gonna-get-some-fruit.gif';


const fullPageCover = {
	'width': '100vh',
    'height': '100vh'
};

const Loader = (props) => (

	<div style={fullPageCover}>
		<span className="centerElement">
			<p>Gonna go get some fruits...</p> 
			<img src={loaderSource} alt="Loading..."/>
		</span>
	</div>
);

export default Loader;