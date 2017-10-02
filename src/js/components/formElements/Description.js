import React from 'react';

export default class Description extends React.Component {

	handleChange(e){
		this.props.handleChange('description', e.target.value)
  	}

	render() {
	  	return (
	  		<fieldset>
				<label htmlFor="description">Описание</label>
				<textarea id="description" value={ this.props.val }
					onChange = { this.handleChange.bind(this)  } required />
			</fieldset>
	  	)
	}
}