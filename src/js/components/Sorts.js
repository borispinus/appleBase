import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Entry from './Entry';
import NotFound from './NotFound';
import CreateModal from './CreateModal';
import UpdateModal from './UpdateModal';
import SortTable from './SortTable';


import idGenerator from '../utils/id';

export default class Sorts extends React.Component {

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

	routerSwitch(){
		return (
			<Switch>
				<Route exact path='/apples/new' render={ ()  => {					
						return <CreateModal addEntry={ this.addEntry.bind(this) }/>
						} 
					}/>
				<Route exact path='/apples/edit/:id' render={ props  => {
					return <UpdateModal
						entry={ this.state.sorts[props.match.params.id] }
						updateEntry={ this.updateEntry.bind(this) }
						/>
					} 
				}/>
			</Switch>
		)
	}

	render() {
		const { sorts } = this.state;
		const table = Object.values(sorts).map(sort => {
			return (
				<Entry 
					key={sort.id} 
					entry={sort}
					updateEntry={this.updateEntry.bind(this)}
					deleteEntry={this.deleteEntry.bind(this)}
				/>
			)
		});
		const message = Object.values(sorts).length ? "" : "Нет записей" 
	  	return (
	  		<div>
	  			<Link to={'/apples/new'}>New</Link>
	  			<SortTable table = { table } />
				{ this.routerSwitch() }
				{ message }
			</div>
		)
	}
}