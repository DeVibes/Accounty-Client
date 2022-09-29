import React, { useState, useEffect } from 'react';
import Router from './Router';
import './App.css';
import { ReactQuery } from './reactQuery';
import { TransactionProvider } from './hooks/context.hook';

const App = () => {
	return (
		<ReactQuery>
			<TransactionProvider>
				<DesktopViewRestrictor>
					<Router/>
				</DesktopViewRestrictor>
			</TransactionProvider>
		</ReactQuery>
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