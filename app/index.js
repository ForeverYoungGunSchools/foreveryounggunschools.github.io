'use strict';

// 3rd party dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// My dependencies
import routes from './components/routes.js';

// Render react app
document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		routes, document.getElementById('react-app')
	);
});
