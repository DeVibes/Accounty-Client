import { apiRoute, googleAPI } from '../../config';
import { logError } from '../logger';

export class ApiClient {
    constructor(route, token) {
        this.apiRoute = route;
        this.token = token;
    }

    setToken(token) {
        this.token = token;
    }

    async get(path, onError) {
        const url = `${this.apiRoute}${path}`;
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        };
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            if (response.status === 401) {
                onError('Unauthorized');
            }
            //   if (response.status === 404) {
            //       onError('Not found');
            //   }
            //   if (response.status === 405) {
            //       onError('');
            else onError('Unexpected error');
        } else {
            const responseJson = await response.json();
            return responseJson;
        }
    }

    async post(path, body, onError) {
        const url = `${this.apiRoute}${path}`;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify(body),
        };
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            onError('Unexpected error');
        }
        const responseJson = await response.json();
        return responseJson;
    }

    async patch(path, body, onError) {
        const url = `${this.apiRoute}${path}`;
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify(body),
        };
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            if (response.status === 404) {
                onError('Not found');
            } else onError('Unexpected error');
        } else {
            const responseJson = await response.json();
            return responseJson;
        }
    }

    async delete(path, onError) {
        const url = `${this.apiRoute}${path}`;
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`,
            },
        };
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            if (response.status === 404) {
                onError('Not found');
            } else onError('Unexpected error');
        } else {
            const responseJson = await response.json();
            return responseJson;
        }
    }
}

export const googleApiClient = new ApiClient(googleAPI);
export const serverApiClient = new ApiClient(apiRoute);
