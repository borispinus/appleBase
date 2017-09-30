import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import UpdateModal from './UpdateModal';

export default class Entry extends React.Component {
	delete(){
		this.props.deleteEntry(this.props.entry.id)
	}
  	render() {
	  	return (
	  		<div>
	  			<h2>{ this.props.entry.name }</h2>
	  			<p>{ this.props.entry.description }</p>
	  			<p>{ this.props.entry.season }</p>
	  			<Link to={`/apples/edit/${this.props.entry.id}`}>Обновить </Link>
	  			<button onClick = { this.delete.bind(this) }>Удалить</button>
		  		<Route path='/apples/:id' render={ ()  => {
					return <UpdateModal
						entry={ this.props.entry }
						updateEntry={ this.props.updateEntry.bind(this) }
						/>
					} 
				}/>
	  		</div>
	  	)
	}
}