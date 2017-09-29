import React from 'react';

export default class EntryForm extends React.Component {
	closeModal(){
		this.props.history.push('/apples');
	}
	handleSubmit(e){
		e.preventDefault();
		console.log(document.getElementById("description"))
		this.props.addEntry({name : document.getElementById("name").value,
			description : document.getElementById("description").value,
			season : document.getElementById("season").value})
		this.closeModal();
	}
	render() {
		return (
			<div className="modal">
				<div className="modal-content">
					<form onSubmit={this.handleSubmit.bind(this)}>
						<fieldset>
						<label htmlFor="name">Назавание</label>
						<input type="text" id="name"/>
						</fieldset>
						<fieldset>
						<label htmlFor="description">Описание</label>
						<textarea id="description"/>
						</fieldset>
						<fieldset>
						<label htmlFor="season">Сезон</label>
						<select id="season">
							<option>Зима</option>
							<option>Весна</option>
							<option>Лето</option>
							<option>Осень</option>
						</select>
						</fieldset>
						<button onClick={this.closeModal.bind(this)}>Закрыть</button>
						<input type="submit" value="Сохранить"/>
					</form>
				</div>
			</div>
		)
	}
}
