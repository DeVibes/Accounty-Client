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

    const checkUser = async () => {
        const token = localStorage.getItem("user_token");
        if (!token) {
            redirectToLogin();
            return;
        }
        setIsLoading(true);
        const { picture: picUrl, name } = await getUsersGoogleData(token);
        setUserData({
            picUrl, 
            name   
        })
        setIsLoading(false);
    };

    const handleLogin = () => {
        setIsLoading(true);
        googleLogin();
    }

    const googleLogin = useGoogleLogin({
        onSuccess: onSuccessfulLogin,
    })

    const api = {
        handleLogin,
        checkUser,
        setIsLoading
    }

    return { isLoading, ...api }
}