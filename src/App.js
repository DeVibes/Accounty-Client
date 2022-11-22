import React from 'react';

import './App.css';
import DesktopViewRestrictor from './utils/DesktopViewRestrictor'
import { ReactQuery } from './utils/ReactQuery';
import { Router } from './modules/Router';
import { PopupProvider } from './shared/context/popup.context';
import { ModalProvider } from './modules/Modal/context/modal.context';
import { TransactionsFilterProvider } from './modules/TransactionView/context/transactionsFilter.context';
import { GoogleAuth } from './utils/Auth/GoogleAuth';
import { UserProvider } from './shared/context/user.context';

const App = () => {
	return (
		<UserProvider>
			<GoogleAuth>
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
			</GoogleAuth>
		</UserProvider>
	);
};

export default App;