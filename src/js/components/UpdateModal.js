import React from 'react';

import EntryForm from './EntryForm';

export default class UpdateModal extends React.Component {
  	render() {
  		return <EntryForm 
  			entry= { this.props.entry }
  			handle = {this.props.updateEntry.bind(this)}
  		/>
  	}
}