import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../../LoginView/hook/auth.hook';

export const PrivateRouteHOC = ({ children }) => {
    const [isValidationLoading, setIsValidationLoading] = useState(false);
    const { validateUser } = useAuth();
    useEffect(() => {
        setIsValidationLoading(true);
        const validate = async () => {
            await validateUser();
            setIsValidationLoading(false);
        };
        validate();
    }, []);

    return isValidationLoading ? null : children;
};
