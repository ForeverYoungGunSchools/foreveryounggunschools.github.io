'use strict';

// 3rd party dependencies
import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, browserHistory} from 'react-router';

// My dependencies
import App from './presentational/App/App';
import Home from './presentational/Home/Home';
import About from './presentational/About/About';
import Classes from './presentational/Classes/Classes';

// React-Router Routes
const routes = (
	<Router history={browserHistory} >
		<Route path="/" component={App} >
			<IndexRoute component={Home} />
			<Route path="/about" component={About} />
			<Route path="/classes" component={Classes} />
		</Route>
	</Router>
);

// Export routes
export default routes;
