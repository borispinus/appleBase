import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
  render() {
  	return (
  		<div>
	  		<p>README</p>
	  		<Link to={"/apples/new"}>New </Link>
	  		<Link to={"/login"}>Login</Link>
  		</div>
  		)
  }
}