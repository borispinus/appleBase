import React from 'react';
import { withRouter } from "react-router-dom";

class EntryForm extends React.Component {
	constructor(props){
		super(props);
		this.state = this.props.entry || { name: '',	description: '', season: 'Зима'}
	}

	closeModal(){
		this.props.history.push('/apples');
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.handle(this.state)
		this.closeModal();
	}

	render() {
		return (
			<div className="modal">
				<div className="modal-content">
					<form>
						<fieldset>
						<label htmlFor="name">Назавание</label>
						<input type="text" id="name" value={this.state.name}
						onChange = { (e) => this.setState({ name : e.target.value }) } />
						</fieldset>
						<fieldset>
						<label htmlFor="description">Описание</label>
						<textarea id="description" value={this.state.description}
							onChange = { (e) => this.setState({ description : e.target.value}) } />
						</fieldset>
						<fieldset>
						<label htmlFor="season">Сезон</label>
						<select id="season" value={this.state.season}
						onChange = { (e) => this.setState({ season : e.target.value }) }>
							<option>Зима</option>
							<option>Весна</option>
							<option>Лето</option>
							<option>Осень</option>
						</select>
						</fieldset>
						<button onClick={this.handleSubmit.bind(this)}>Сохранить</button>
						<button onClick={this.closeModal.bind(this)}>Закрыть</button>
					</form>
				</div>
			</div>
		)
	}
}
export default withRouter(EntryForm);
