import React from 'react';

export default class Season extends React.Component {

	handleChange(e){
		this.props.handleChange('season', e.target.value)
  	}

	render() {
	  	return (
	  		<fieldset>
				<label htmlFor="season">Сезон</label>
				<select id="season" value={ this.props.val }
					onChange = { this.handleChange.bind(this) }>
					<option>Зима</option>
					<option>Весна</option>
					<option>Лето</option>
					<option>Осень</option>
				</select>
			</fieldset>
	  	)
  	}
};
