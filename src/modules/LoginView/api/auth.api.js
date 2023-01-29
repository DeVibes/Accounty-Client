import { apiRoute, googleAPI } from '../../../config';
import { log } from '../../../utils/logger';

export const getUsersGoogleData = async usersToken => {
    const response = await fetch(`${googleAPI}access_token=${usersToken}`);
    if (response.status === 401) // UNAUTHENTICATED
        return null;
    const responseJson = await response.json();
    const userData = {
        email : responseJson.email,
        name: responseJson.name,
        picUrl: responseJson.picture.slice(0, -2),
        userId: responseJson.id
    }
    log("Found user: " + userData.name);
    return userData;
};

export const getAPIAccessToken = async gToken => {
    try {
        const requestOptions = {
            method: "GET",
            headers: { 
                'Authorization': `Bearer ${gToken}`
            }
        };
        const response = await fetch(apiRoute+ "/auth", requestOptions);
        if (response.status === 401) // UNAUTHENTICATED
            return null;
        const { token: apiToken, accounts } = await response.json();
        const linkedAccountId = accounts[0];
        return { apiToken, linkedAccountId };
    } catch (error) {
        
    }
}