import React from 'react';

export default class Name extends React.Component {

	handleChange(e){
		this.props.handleChange('name', e.target.value)
  	}

	render() {
	  	return (
	  		<fieldset>
				<label htmlFor="name">Назавание</label>
				<input type="text" id="name" value={ this.props.val }
					onChange = { this.handleChange.bind(this)  } required/>
			</fieldset>
	  	)
	}
}