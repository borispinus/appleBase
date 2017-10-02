import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
  render() {
  	document.title = "Главная";
  	return (
  		<div className = "app-description">
	  		<h1>База сортов яблок</h1>
	  		<p>Данное приложение позволяет добавлать записи о сортах яблок. 
	  		Каждая запись состоит из названия, описания и сезона сорта, а также даты создания записи. 
	  		Для прехода к приложению нажмите на <Link to={"/apples"}>ссылку</Link>.</p>
	  		
  		</div>
  		)
  }
}