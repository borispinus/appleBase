import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import formatDate from '../utils/date';

export default class Entry extends React.Component {
	delete(){
		this.props.deleteEntry(this.props.entry.id)
	}
	
  	render() {
  		const { entry } = this.props; 
	  	return (
	  		<tr>
	  			<td>{ entry.name }</td>
	  			<td>{ formatDate(entry.date) }</td>
	  			<td>{ entry.description }</td>
	  			<td>{ entry.season }</td>
	  			<td><Link to={`/apples/edit/${entry.id}`}>Обновить </Link></td>
	  			<td><button onClick = { this.delete.bind(this) }>Удалить</button></td>
	  		</tr>
	  	)
	}
}