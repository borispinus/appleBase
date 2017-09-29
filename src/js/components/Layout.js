import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from "./Main";
import SortList from "./SortList";
import NotFound from "./NotFound";
import Login from "./Login";

export default class Layout extends React.Component {
  render() {
  	return (
	  	<Switch>
	  		<Route exact path="/" component={Main}/>
			<Route path="/apples" component={SortList}/>
			<Route exact path='/login' component={Login}/>
			<Route component={NotFound}/>
		</Switch>
		)
  }
}