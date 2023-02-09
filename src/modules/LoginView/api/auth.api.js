import { googleApiClient, serverApiClient } from '../../../utils/API/ApiClient';
import { log, logError } from '../../../utils/logger';

export const getUsersGoogleData = async (usersToken) => {
    const onError = (msg) => {
        throw new Error(msg);
    };
    try {
        const url = `?access_token=${usersToken}`;
        const data = await googleApiClient.get(url, onError);
        const userData = {
            email: data.email,
            name: data.name,
            picUrl: data.picture.slice(0, -2),
            userId: data.id,
        };
        log('Found user: ' + userData.name);
        return userData;
    } catch (error) {
        return null;
    }
};

export const getAPIAccessToken = async () => {
    const onError = (msg) => {
        throw new Error(msg);
    };
    try {
        const url = `/auth`;
        const data = await serverApiClient.get(url, onError);
        const { token: apiToken, account: linkedAccountId, userRole } = data;
        return { apiToken, linkedAccountId, userRole };
    } catch (error) {
        return null;
    }
};
