import React from 'react';
import { Link } from 'react-router-dom';

import formatDate from '../utils/date';

export default class Entry extends React.Component {
	delete(){
		this.props.deleteEntry(this.props.entry.id);
	}

	render() {
		const { entry } = this.props;
		return (
			<tr className="entry">
				<td>{ entry.name }</td>
				<td>{ entry.description }</td>
				<td>{ entry.season }</td>
				<td>{ formatDate(entry.date) }</td>
				<td><Link to={`/apples/edit/${entry.id}`}>
						<i className="fa fa-pencil-square-o fa-2x"
							aria-hidden="true"></i>
					</Link>
				</td>
				<td>
					<button onClick = { this.delete.bind(this) }>
						<i className="fa fa fa-times fa-2x"
							aria-hidden="true"></i>
					</button>
				</td>
			</tr>
		);
	}
}