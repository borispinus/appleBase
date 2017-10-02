import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from "./Main";
import Sorts from "./Sorts";
import NotFound from "./NotFound";

export default class Layout extends React.Component {
  render() {
  	return (
	  	<Switch>
	  		<Route exact path="/" component={Main}/>
			<Route path="/apples" component={Sorts}/>
			<Route component={NotFound}/>
		</Switch>
		)
  }
}