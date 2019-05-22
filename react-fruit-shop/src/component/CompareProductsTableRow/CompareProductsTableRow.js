import React, {	Component	} from 'react';

class CompareProductsTableRow extends Component {

	createRows = () => {

		let rows = [];
		let dataModelPropertyKeys = Object.keys(this.props.dataModel.rowProperties);


		dataModelPropertyKeys.forEach((key,index) => {

			let cells = [];
			let currentRowPropertyLabel = this.props.dataModel.rowProperties[key];

			cells.push(<td key="-1">{currentRowPropertyLabel}</td>);

			this.props.items.forEach((item, index) => {
				
				cells.push(<td key={index}>{item[key]}</td>);
			});

			rows.push(<tr key={index}>{cells}</tr>);
    	});

		return rows;
	}

	render() {
		return (
			<tbody>
				{this.createRows()}
			</tbody>
		)
	}
}

export default CompareProductsTableRow;