import React from 'react';
import { withRouter } from 'react-router-dom';

import Name from './formElements/Name';
import Description from './formElements/Description';
import Season from './formElements/Season';

class EntryForm extends React.Component {
	constructor(props){
		super(props);
		const entry = this.props.entry ||
			{ name: '',	description: '', season: 'Зима'};
		const isValid = this.props.entry ? true : false;
		this.state = { entry, isValid };
	}

	closeModal(){
		this.props.history.push('/apples');
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.handle(this.state.entry);
		this.closeModal();
	}

	handleChange(input, value){
		this.setState({
			entry: {...this.state.entry,
				[input] : value
			}
		});
		const entry = {...this.state.entry, [input] : value};
		this.setState({
			isValid: entry.name && entry.description
		});
	}



	render() {
		const { entry } = this.state;
		return (
			<div className="modal">
				<div className="modal-content">
					<form>
						<Name val = { entry.name }
							name = "name"
							handleChange = {this.handleChange.bind(this)} />
						<Description val = {entry.description}
							name="description"
							handleChange = {this.handleChange.bind(this)} />
						<Season val = { entry.season }
							name="season"
							handleChange = {this.handleChange.bind(this)} />
						<button type = "submit"
							className = "save-btn"
							onClick={ this.handleSubmit.bind(this) }
							disabled={ !this.state.isValid }>Сохранить</button>
						<button onClick={ this.closeModal.bind(this) }
							className = "close-btn">
							<i className="fa fa-times fa-2x"
								aria-hidden="true"></i>
						</button>
					</form>
				</div>
			</div>
		);
	}
}
export default withRouter(EntryForm);
