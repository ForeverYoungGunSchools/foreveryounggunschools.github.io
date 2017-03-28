'use strict';

// 3rd party dependencies
import React from 'react';
import {Link} from 'react-router';

// My dependencies
import './classes-styles.css';

// Create presentational Classes component
function Classes(props) {
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
			<div className="classes">
				<p>I teach the following courses:</p>
				<div><span className="single-indent">Utah Concealed Carry ($40)</span><span className="right">4 hours</span></div>
				<div><span className="single-indent">NRA Classes</span></div>
				<div><span className="double-indent">*Basic pistol, rifle and shotgun</span><span className="right">3 hours</span></div>
				<div><span className="double-indent">Refuse to be a victim</span><span className="right">3-4 hours</span></div>
				<div><span className="double-indent">*Personal protection in the home</span><span className="right">8 hours</span></div>
				<div><span className="double-indent">*Personal protection outside the home</span><span className="right">14 hours</span></div>
				<div><span className="double-indent">Home firearm safety</span><span className="right">4 hours</span></div>
				<div className="class-info">
					<p>Class costs depend on size of the class and location. Classes marked with a * indicate range time and shooting requrements to be met. The NRA classes also involve classroom time. Shooting classes have a max of 4 per instructor.</p>
				</div>
				<div className="margin"><span className="single-indent">Personal tactical training</span><span className="right">4-6 hours</span></div>
				<div className="class-info">
					<p>This is for individual or groups no larger than four students. It is all shooting, drills, skill development and mental preparation.</p>
				</div>
				<p className="class-info">I am based in Utah in the town of Orem, next to Provo, home of BYU. I can travel anywhere in Utah but need to have certain class sizes and shooting ranges available. For friends out of state, arrange with me for your next trip to Utah and we will train you then.</p>
			</div>
		</div>
	);
}

// Export Classes component
export default Classes;