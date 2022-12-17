import { googleAPI } from '../../../config';
import { log } from '../../../utils/logger';

export const getUsersGoogleData = async usersToken => {
    const response = await fetch(`${googleAPI}access_token=${usersToken}`);
    if (response.status === 401) // UNAUTHENTICATED
        return null;
    const userData = await response.json();
    userData.picture = userData.picture.slice(0, -2);
    log("Found user: " + userData.name);
    return userData
};