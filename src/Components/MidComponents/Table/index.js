import React from 'react';
import { Table } from 'reactstrap';
import './Table.css';

export default class Tables extends React.Component {
	render() {
		return (
			<div>
				<Table border="1" rules="none" className="border-color mb-5" responsive>
					<thead>
						<tr className="Rectangle-15">
							<th className="Categories-Investment w-25">Investment option</th>
							<th className="CategoriesPer w-25">Percentage</th>
							<th className="CategoriesAmt  w-25">Amount</th>
							<th className="Values-Available-Balanace w-md-25">Available balance</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row" className="Values w-25" >Gift preservation</th>
							<td><span className="Rectangle-input"><span className="layer-per">25%</span></span></td>
							<td><span className="Rectangle-input-A"><span className="layer-per">$250</span></span></td>
							<td className="Values-5000"><span>$5000</span><span class="Left-Padding Expand">
								<img src={require('../../../assets/images/add_field.png')} className="if_add_370092" /></span>
							</td>
						</tr>
						<tr>
							<th className="Values w-25" scope="row">Short term bond</th>
							<td><span className="Rectangle-input"><span className="layer-per">25%</span></span></td>
							<td><span className="Rectangle-input-A"><span className="layer-per">$250</span></span></td>
							<td className="Values-5000 "><span>$5000</span><span class="Left-Padding Expand">
								<img src={require('../../../assets/images/add_field.png')} className="if_add_370092" /></span>
							</td>
						</tr>
						<tr>
							<th className="Values w-25" scope="row">Money market</th>
							<td><span className="Rectangle-input"><span className="layer-per">25%</span></span></td>
							<td><span className="Rectangle-input-A"><span className="layer-per">$250</span></span></td>
							<td className="Values-5000 "><span>$5000</span><span class="Left-Padding Expand">
								<img src={require('../../../assets/images/add_field.png')} className="if_add_370092" /></span>
							</td>
						</tr>
						<tr>
							<th className="Values w-25" scope="row">Total bond</th>
							<td><span className="Rectangle-input"><span className="layer-per">25%</span></span></td>
							<td><span className="Rectangle-input-A"> <span className="layer-per">$250</span></span></td>
							<td className="Values-5000"><span>$5000</span><span class="Left-Padding Expand">
								<img src={require('../../../assets/images/add_field.png')} className="if_add_370092" /></span>
							</td>
						</tr>
						<tr>
							<th className="Values w-25 Total" scope="row">Total</th>
							<td></td>
							<td className="TotalValues"><span>$1000</span></td>
							<td className="TotalValuesEnd">$20000</td>
						</tr>

					</tbody>
				</Table>
				<div className="Line-3"> </div>
			</div>
		);
	}
}