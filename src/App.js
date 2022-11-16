import React from 'react';

import './App.css';
import DesktopViewRestrictor from './utils/DesktopViewRestrictor'
import { ReactQuery } from './utils/ReactQuery';
import { Router } from './modules/Router';
import { PopupProvider } from './shared/context/popup.context';
import { ModalProvider } from './modules/Modal/context/modal.context';
import { TransactionsFilterProvider } from './modules/TransactionView/context/transactionsFilter.context';

const App = () => {
	return (
		<ModalProvider>
			<PopupProvider>
				<TransactionsFilterProvider>
					<ReactQuery>
						<DesktopViewRestrictor>
							<Router/>
						</DesktopViewRestrictor>
					</ReactQuery>
				</TransactionsFilterProvider>
			</PopupProvider>
		</ModalProvider>
	);
};

export default App;