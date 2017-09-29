import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import EntryForm from './EntryForm';
import Entry from './Entry';
import NotFound from './NotFound';

export default class SortList extends React.Component {

constructor(){
	super();
	this.state = {sorts: []};
}

addEntry(name, description, season){
	this.setState({
		sorts: this.state.sorts.concat({
			name,
			description,
			season,
			date: new Date
		})
	})
}

render() {
	const table = this.state.sorts.map(sort => <Entry key={sort.id} entry={sort}/>)
  	return (
  		<div>
  			<Link to={'/apples/new'}>New </Link>
  			{table}
		  	<Switch>
		  		<Route path='/apples/edit/:id' component={EntryForm}/>
				<Route path='/apples/new' render={ ()  => {
					return <EntryForm addEntry={ this.addEntry.bind(this) }/>
					} 
				}/>
				<Route path= '/apples/*' component={NotFound}/>
			</Switch>
		</div>
	)
  }
}