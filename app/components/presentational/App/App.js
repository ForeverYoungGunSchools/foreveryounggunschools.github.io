'use strict';

// 3rd party dependencies
import React from 'react';

// My dependencies
import './app-styles.css';

// Create presentational App component
function App(props) {
	return (
		<div>
				{props.children}
		</div>
	);
}

// Export App component
export default App;