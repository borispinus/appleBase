import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import '../css/main.sass';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Layout}/>
		</Switch>
	</BrowserRouter>, document.getElementById('app'));