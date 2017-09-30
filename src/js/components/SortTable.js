import React from 'react';

export default class SortTable extends React.Component {
  render() {
  	return (
	  	<table>
			<thead>
				<tr>
					<th>Название</th>
				    <th>Дата добавления</th>
				    <th>Описание</th>
				    <th>Сезон</th>
				    <th></th>
				    <th></th>
				</tr>
			</thead>
			<tbody>
				{ this.props.table }
			</tbody>
		</table>
	)
  }
}