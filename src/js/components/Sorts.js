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
		this.message = 'Нет записей';
		this.state = {sorts: {}, message: this.message};
		this.id = idGenerator();
	}

	addEntry(entry){
		const id = this.id();
		this.setState({
			sorts: {
				...this.state.sorts,
				[id] : { ...entry, id, date: new Date() }
			},
			message: ''
		});

	}

	updateEntry(entry){
		this.setState({
			sorts: { ...this.state.sorts, [entry.id] : { ...entry }}
		});
	}

	deleteEntry(id){
		let tmp = {...this.state.sorts};
		delete tmp[id];
		const message = Object.values(tmp).length ? '' : this.message;
		this.setState({
			sorts: { ...tmp},
			message
		});
	}

	routerSwitch(){
		return (
			<Switch>
				<Route exact path='/apples/new' render={ () => {
					document.title = 'Добавление записи';
					return <CreateModal addEntry={ this.addEntry.bind(this) }/>;
				}
					}/>
				<Route exact path='/apples/edit/:id' render={ props => {
					document.title = 'Изменение записи';
					return <UpdateModal
						entry={ this.state.sorts[props.match.params.id] }
						updateEntry={ this.updateEntry.bind(this) }
						/>;
					}
				}/>
			</Switch>
		);
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
			);
		});

		document.title = 'Список сортов';
		return (
			<div>
				<Link className = "new-entry-link" to={'/apples/new'}>
					<i className="fa fa-plus" aria-hidden="true"></i> Новая запись
				</Link>
				<SortTable table = { table } message = { this.state.message } />
				{ this.routerSwitch() }
			</div>
		);
	}
}