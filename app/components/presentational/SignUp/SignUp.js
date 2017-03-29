'use strict';

// 3rd party imports
import React from 'react';
import {Link} from 'react-router';

// My imports
import './signUp.css';

// Create SignUp component
function SignUp(props) {
	return (
		<div>
			<div className="main-container"></div>
			<div className="white-container"></div>
			<div className="nav">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About Me</Link></li>
					<li><Link to="/classes">Classes</Link></li>
					<li><Link to="/signup">Sign Up</Link></li>
				</ul>
			</div>

			<div className="signup">
				<p>View and sign up for upcoming classes <a href="https://www.eventbrite.com/e/utah-concealed-firearm-permit-class-tickets-33133704803">here</a>.</p>
				<p>For a custom class with your friends, text me for details.</p>
				<p>I am now a partner with Mountain West Firearms. If you are looking to purchase a gun anytime soon, please contact me for a great price.</p>
				<div className="family-pic"></div>
			</div>
		</div>
	);
}

// Export SignUp component
export default SignUp;