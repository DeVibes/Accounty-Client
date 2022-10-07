import React from 'react';

import './App.css';
import DesktopViewRestrictor from './utils/DesktopViewRestrictor'
import { ReactQuery } from './utils/ReactQuery';
import { Router } from './modules/Router';
import { PopupProvider } from './shared/context/popup.context';

const App = () => {
	return (
		<PopupProvider>
			<ReactQuery>
				<DesktopViewRestrictor>
					<Router/>
				</DesktopViewRestrictor>
			</ReactQuery>
		</PopupProvider>
	);
};

export default App;