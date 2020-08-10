import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Particles from 'react-particles-js';
import Socialicons from '../components/Socialicons';
import Layout from '../components/Layout';

function Home() {
	const [ information, setInformation ] = useState('');
	const paramConfig = {
		particles: {
			number: {
				value: 160,
				density: {
					enable: false
				}
			},
			color: {
				value: '#ffffff'
			},
			opacity: {
				value: 0.1
			},
			size: {
				value: 5,
				random: true,
				anim: {
					speed: 4,
					size_min: 0.3
				}
			},
			line_linked: {
				enable: false
			},
			move: {
				random: true,
				speed: 1,
				direction: 'top',
				out_mode: 'out'
			}
		}
	};
	useEffect(() => {
		axios.get('/api/information').then((response) => {
			setInformation(response.data);
		});
	}, []);
	return (
		<Layout>
			<div className="mi-home-area mi-padding-section">
				<Particles className="mi-home-particle" params={paramConfig} />
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10 col-12">
							<div className="mi-home-content">
								<h1>
									Hoi, ik ben{' '}
									<span className="color-theme">
										{information.firstName} {information.lastName}
									</span>
								</h1>
								<p>{information.aboutContent}</p>
								<Socialicons bordered />
								<NavLink style={style} className="mi-button portfolio-button" to="/portfolios">
									Bekijk Portfolio
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

const style = {
	marginTop: '35px'
};

export default Home;
