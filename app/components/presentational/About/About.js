'use strict';

// 3rd party dependencies
import React from 'react';
import {Link} from 'react-router';

// My dependencies
import './about-styles.css';

// Create presentational About component
function About(props) {
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
			<div className="me">
				<div className="my-pic"></div>
				<p>My name is Harold Young.  I was born and raised in Colorado.  I am retired law enforcement with 27 years of service, 10 of which were in S.W.A.T.  I also am retired military with the U.S. Army, Utah National Guard. I served 24 years, 21 of which were with Special Forces.  I'm married with 6 kids and 24 grandkids.</p>
			</div>
			<div className="women">
				<div className="woman-pic"></div>
				<p>I really enjoy teaching women. I am married to the world's most wonderful woman. I have five equally wonderful daughters, one daughter-in-law, and nine granddaughters.</p>
				<p>I am committed to seeing that women have the tools that they need to protect themselves and their family. As a police officer, I saw many victims who may have been able to protect themselves if only they had the skills.</p>
				<p>I love to have women in my classes and am a skilled teacher who loves to pass on skills and training to make women capable and safe.</p>
				<p>I look forward to helping you become a warrior princess.</p>
			</div>
			<div className="men">
				<p>Men, don't feel left out. With my experience in both law enforcement (SWAT) and military (Special Forces), I can bring your skills to a phenomenal level.</p>
				<p>I am dependent in the shooting classes to the availablility and cost of ranges. In good weather, I have an outdoor location up Provo Canyon. For the classroom work, I can either teach your group at the Orem Boy Scouts office or in individual homes. Call or text me for more information.</p>
			</div>
		</div>
	);
}

// Export About component
export default About;