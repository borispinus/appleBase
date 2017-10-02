import React from 'react';

export default class SortTable extends React.Component {

	render() {
		let message = null
		if (this.props. message){
			message = <tr>
					<td className = "message" colSpan="6"> 
						{ this.props.message }
					 </td>
				</tr>;
		}
		return (
			<table className = "sort-table">
				<thead>
					<tr>
						<th>Название</th>
						<th>Описание</th>
						<th>Сезон</th>
						<th>Дата</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{ this.props.table }
					{ message }
				</tbody>
			</table>
			)
	}
}