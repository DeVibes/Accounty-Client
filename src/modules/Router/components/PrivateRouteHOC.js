import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useUserDataContext } from '../../../shared/context/user.context';
import { useUserDataStore } from '../../../shared/state/userDataStore';
import { Session } from '../../../utils/session';
import { useAuth } from '../../LoginView/hook/auth.hook';
import { useTransactionsFilters } from '../../TransactionView/context/transactionsFilter.context';

export const PrivateRouteHOC = ({ children }) => {
    const { validateUser  } = useAuth();
    useEffect(() => {
        validateUser()
    }, [])

    return children;
};
