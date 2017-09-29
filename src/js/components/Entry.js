import React from 'react';
import { Link } from 'react-router-dom';

export default class Entry extends React.Component {
	delete(){
		this.props.delete(this.props.entry.id)
	}
  	render() {
	  	return (
	  		<div>
	  			<h2>{ this.props.entry.name }</h2>
	  			<p>{ this.props.entry.description }</p>
	  			<p>{ this.props.entry.season }</p>
	  			<Link to={`/apples/edit/${this.props.entry.id}`}>Обновить </Link>
	  			<button onClick = { this.delete.bind(this) }></button>
	  		</div>
	  	)
	}
}