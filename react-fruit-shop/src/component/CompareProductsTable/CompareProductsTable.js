import React, {	Component	} from 'react';
import CompareProductsTableRow from '../CompareProductsTableRow/CompareProductsTableRow';
import './CompareProductsTable.scss';


class CompareProductsTable extends Component {

	state = {
		prodDataModelForTable: {
			distinctProperty: "id",
			headerProperty: {
				name: "Name"
			},
			rowProperties: {
		        price: "Price",
		        description: "Description"
			}
		}
	}

	render(){
		return (
			<table className="productsTable boxShadow">
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