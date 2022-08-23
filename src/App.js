import React, { useState, useEffect } from 'react';
import Router from './Router';
import './App.css';

const App = () => {
	return (
		<DesktopViewRestrictor>
			<Router/>
		</DesktopViewRestrictor>
	);
};

export default App;

const DesktopViewRestrictor = ({ children }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const handleWindowResize = () => {
		setWindowWidth(window.innerWidth)
	};
	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [windowWidth])
	if (windowWidth <= 600)
		return children;
	else
		return (
			<>Only mobile</>
		);
};