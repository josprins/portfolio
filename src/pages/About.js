import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import FsLightbox from 'fslightbox-react';
// import * as Icon from 'react-feather';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';

function About() {
	// const [ toggler, setToggler ] = useState(false);
	const [ information, setInformation ] = useState('');

	// const handleToggler = (event) => {
	// 	setToggler({
	// 		toggler: event
	// 	});
	// };

	useEffect(() => {
		axios.get('/api/information').then((response) => {
			setInformation(response.data);
		});
	}, []);

	return (
		<Layout>
			<div className="mi-about-area mi-section mi-padding-top">
				<div className="container">
					<Sectiontitle title="Over Mij" />
					<div className="row">
						<div className="col-lg-6">
							<div className="mi-about-content">
								<h3>
									Hoi, ik ben <span className="color-theme">{information.firstName}</span>. Aangenaam
									kennis te maken.
								</h3>
								<p>
									Sinds het begin van mijn ontwikkeling als web ontwikkelaar bijna 2 jaar geleden heb
									ik verschillende gratis online cursussen gedaan daarna heb ik me aangemeld voor de
									Front End Web Development Techdegree via{' '}
									<a href="teamtreehouse.com/techdegree">Teamtreehouse.com</a>. Tijdens deze opleiding
									zijn veel van de gangbare font-end technologiën aan bod gekomen en deze weet ik nu
									met zelfvertrouwen te gebruiken.
								</p>
								<ul>
									{!information.name ? null : (
										<li>
											<b>Naam</b> {information.name}
										</li>
									)}
									{!information.age ? null : (
										<li>
											<b>Leeftijd</b> {information.age} jaar
										</li>
									)}
									{!information.phone ? null : (
										<li>
											<b>Telefoon</b> {information.phone}
										</li>
									)}
									{!information.nationality ? null : (
										<li>
											<b>Nationaliteit</b> {information.nationality}
										</li>
									)}
									{!information.language ? null : (
										<li>
											<b>Talen</b> {information.language}
										</li>
									)}
									{!information.email ? null : (
										<li>
											<b>Email</b> <a href="mailto:jco.prins@gmail.com">{information.email}</a>
										</li>
									)}
								</ul>
								<a href={information.cvfile} className="mi-button">
									Download CV
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default About;
