'use strict';

// 3rd party dependencies
import React from 'react';
import {Link} from 'react-router';

// My dependencies
import './home-styles.css';

// Create presentational Home component
function Home(props) {
	return (
		<div>
			<div className="main-container"></div>
			<div className="white-container"></div>
			<div className="nav">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About Me</Link></li>
					<li><Link to="/classes">Classes</Link></li>
				</ul>
			</div>
			<div className="headline">
				<div className="family-bg"></div>
				<p className="quote">"Protecting yourself and those you love through proper instruction and training"</p>
			</div>
			<div className="title">
				<h1>Forever Young Gun Schools</h1>
				<h3>www.ForeverYoungGunSchools.com</h3>
			</div>
			<div className="home-info">
				<h4>NRA Classes</h4>
				<h4>Utah Concealed Carry</h4>
				<h4>Individualized Tactical Training</h4>
				<h5>(801) 608-4540</h5>
				<h6>oosie48@gmail.com</h6>
			</div>
		</div>
	);
}

// Export App component
export default Home;