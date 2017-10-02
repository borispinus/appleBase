import React from 'react';

import EntryForm from './EntryForm';


export default class CreateModal extends React.Component {
	render() {
		return <EntryForm handle={ this.props.addEntry.bind(this) }/>;
	}
}