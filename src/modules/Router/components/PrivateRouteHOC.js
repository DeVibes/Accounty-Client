import { useEffect } from 'react';
import { useAuth } from '../../LoginView/hook/auth.hook';

export const PrivateRouteHOC = ({ children }) => {
    const { checkUser } = useAuth();
    useEffect(() => {
        checkUser()
    }, []);

    return children;
};
