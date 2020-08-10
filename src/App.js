import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Resumes from './pages/Resumes';
import Portfolios from './pages/Portfolios';
import Contact from './pages/Contact';

function App() {
	return (
		<HashRouter basename={process.env.PUBLIC_URL}>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/resume" component={Resumes} />
			<Route path="/portfolios" component={Portfolios} />
			<Route path="/contact" component={Contact} />
		</HashRouter>
	);
}

export default App;
