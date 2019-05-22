import React, {	Component	} from 'react';
import CompareProductsTableRow from '../CompareProductsTableRow/CompareProductsTableRow';


class CompareProductsTable extends Component {

	state = {
		prodDataModelForTable: {
			distinctProperty: "id",
			headerProperty: {
				name: "Name"
			},
			rowProperties: {
		        image: "Image",
		        price: "Price",
		        description: "Description",
		        colour: "Colour"
			}
		}
	}

	render(){
		return (
			<table>
				<thead>
					<tr>
						<td key="-1"></td>
						{
		                  this.props.products.map((product, index) => {
		                    return <td key={product[this.state.prodDataModelForTable.distinctProperty]}>
		                    			{product[Object.keys(this.state.prodDataModelForTable.headerProperty)]}
		                    		</td>
		                  })
		                }
					</tr>
				</thead>
                <CompareProductsTableRow 
                	items={this.props.products}
                	dataModel={this.state.prodDataModelForTable} />
            </table>
		)
	}

}

export default CompareProductsTable;