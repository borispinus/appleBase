import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Entry from './Entry';
import NotFound from './NotFound';
import CreateModal from './CreateModal';


import idGenerator from '../utils/id';

export default class SortList extends React.Component {

	constructor(){
		super();
		this.state = {sorts: {}};
		this.id = idGenerator();
	}

	addEntry(entry){
		const id = this.id();
		this.setState({
			sorts: { 
				...this.state.sorts,
				[id] : { ...entry, id, date: new Date() }
			}
		});
	}

	updateEntry(entry){
		this.setState({
			sorts: { ...this.state.sorts, [entry.id] : { ...entry }}
		});
	}

	deleteEntry(id){
		let tmp = {...this.state.sorts}
		delete tmp[id]
		this.setState({
			sorts: { ...tmp}
		});
	}

	render() {
		const table = Object.values(this.state.sorts).map(sort => {
			return (
				<Entry 
					key={sort.id} 
					entry={sort}
					updateEntry={this.updateEntry.bind(this)}
					deleteEntry={this.deleteEntry.bind(this)}
				/>
			)
		});
	  	return (
	  		<div>
	  			<Link to={'/apples/new'}>New </Link>
	  			{table}
			  	<Route path='/apples/new' render={ ()  => {					
					return <CreateModal addEntry={ this.addEntry.bind(this) }/>
					} 
				}/>
			</div>
		)
	}
}