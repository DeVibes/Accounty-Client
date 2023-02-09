import { shallow } from 'zustand/shallow';
import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useUserDataStore } from '../../../shared/state/userDataStore';
import { Session } from '../../../utils/session';
import { useRouting } from '../../Router/hooks/routing.hook';
import { getAPIAccessToken, getUsersGoogleData } from '../api/auth.api';
import { serverApiClient } from '../../../utils/API/ApiClient';
import { logError } from '../../../utils/logger';
import { useFeedbackStore } from '../../../shared/state/feedbackStore';

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        updateUserData,
        updateLinkedAccountId,
        resetUserData,
        hasUserData,
    } = useUserDataStore(
        (state) => ({
            updateUserData: state.updateUserData,
            updateLinkedAccountId: state.updateLinkedAccountId,
            resetUserData: state.resetUserData,
            hasUserData: state.hasUserData,
        }),
        shallow
    );

    const openFeedback = useFeedbackStore((state) => state.openFeedback);

    const setLoading = () => setIsLoading(true);
    const setNoLoading = () => setIsLoading(false);

    const { redirectToMain, redirectToLogin } = useRouting();

    const onSuccessfulLogin = async ({ access_token }) => {
        if (!access_token) {
            setNoLoading();
            handleLogout();
            return;
        }
        Session.setData('gAccessToken', access_token);
        const isApiGranted = await setupUserAPIAccessToken(access_token);
        if (!isApiGranted) {
            setNoLoading();
            handleLogout();
            openFeedback('Error in getting api token');
            return;
        }
        const isGoogleDataGranded = await setupUserGoogleData(access_token);
        if (!isGoogleDataGranded) {
            setNoLoading();
            handleLogout();
            openFeedback('Error in getting google data');
            return;
        }
        setNoLoading();
        redirectToMain();
    };

    const handleLogin = () => {
        setLoading();
        googleLogin();
    };

    const googleLogin = useGoogleLogin({
        onSuccess: onSuccessfulLogin,
        onError: redirectToLogin,
    });

    const setupUserAPIAccessToken = async (gToken) => {
        serverApiClient.setToken(gToken);
        const apiResponse = await getAPIAccessToken();
        if (!apiResponse) {
            logError('Error in getting api token');
            return false;
        }
        const { apiToken, linkedAccountId, userRole } = apiResponse;
        serverApiClient.setToken(apiToken);
        if (apiToken !== null) Session.setData('apiAccessToken', apiToken);
        Session.setData('linkedAccountId', linkedAccountId);
        updateUserData({
            role: userRole,
            linkedAccountId: linkedAccountId,
        });
        return true;
    };

    const setupUserGoogleData = async (gToken) => {
        const userData = await getUsersGoogleData(gToken);
        if (!userData) {
            logError('Error in getting google data');
            return false;
        }
        Session.setDataObject(userData);
        updateUserData(userData);
        return true;
    };

    const handleLogout = () => {
        Session.resetData();
        resetUserData();
        redirectToLogin();
    };

    const validateUser = () => {
        const gToken = Session.getData('gAccessToken');
        const apiToken = Session.getData('apiAccessToken');
        if (gToken === null || apiToken === null) {
            logError('Missing tokens from session');
            handleLogout();
            openFeedback('Session ended please login again');
        }
        if (!hasUserData()) {
            if (!sessionHasUserData()) {
                logError('Missing user data from session');
                handleLogout();
                openFeedback('Session ended please login again');
            }
            setUserDataFromSession();
        }
        serverApiClient.setToken(apiToken);
    };

    const sessionHasUserData = () => {
        return (
            Session.getData('email') !== undefined &&
            Session.getData('name') !== undefined &&
            Session.getData('userId') !== undefined &&
            Session.getData('picUrl') !== undefined &&
            Session.getData('linkedAccountId') !== undefined &&
            Session.getData('role') !== undefined
        );
    };

    const setUserDataFromSession = () => {
        const userDataFromSession = {
            linkedAccountId: Session.getData('linkedAccountId'),
            email: Session.getData('email'),
            name: Session.getData('name'),
            userId: Session.getData('userId'),
            picUrl: Session.getData('picUrl'),
            role: Session.getData('role'),
        };
        updateUserData(userDataFromSession);
    };

    const api = {
        handleLogin,
        handleLogout,
        validateUser,
    };

    return { isLoading, ...api };
};
