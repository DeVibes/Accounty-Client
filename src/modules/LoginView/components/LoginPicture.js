import React from 'react';

export const LoginPicture = () => {
    return (
        <img
            src={process.env.PUBLIC_URL + '/login4.svg'}
            alt="Login"
            className="w-full h-1/2"
        />
    );
};
