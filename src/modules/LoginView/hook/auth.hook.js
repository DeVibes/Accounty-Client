import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useUserDataContext } from '../../../shared/context/user.context';
import { useRouting } from '../../Router/hooks/routing.hook';
import { getUsersGoogleData } from '../api/auth.api';

export const useAuth = () => {
    const [isLoading, setIsLoading ] = useState(false);
    const { setUserData } = useUserDataContext();
    const { redirectToMain, redirectToLogin } = useRouting();

    const onSuccessfulLogin = ({ access_token }) => {
        localStorage.setItem("user_token", access_token);
        checkUser();
        setIsLoading(false);
        redirectToMain();
    };

    const handleLogout = () => {
        localStorage.clear();
        setUserData(undefined);
        redirectToLogin();
    }

    const checkUser = async () => {
        setIsLoading(true);
        const token = localStorage.getItem("user_token");
        if (!token) {
            setIsLoading(false);
            handleLogout();
            return;
        }
        const userData = await getUsersGoogleData(token);
        if (!userData) {
            setIsLoading(false);
            handleLogout();
            return;
        }
        const { picture: picUrl, name, id, email } = userData;
        setUserData({
            picUrl, 
            name,
            id,
            email   
        })
        setIsLoading(false);
    };

    const handleLogin = () => {
        setIsLoading(true);
        googleLogin();
    }

    const googleLogin = useGoogleLogin({
        onSuccess: onSuccessfulLogin,
        onError: redirectToLogin
    })

    const api = {
        handleLogin,
        handleLogout,
        checkUser,
        setIsLoading
    }

    return { isLoading, ...api }
}