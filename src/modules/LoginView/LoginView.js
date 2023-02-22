import React from 'react';
import Spinner from '../../shared/components/Spinner';
import { Color } from '../../utils/colors';
import { GoogleIcon, LoginIcon } from '../../utils/icons';
import { LoginPicture } from './components/LoginPicture';
import { useAuth } from './hook/auth.hook';

export const LoginView = () => {
    const { handleLogin, isLoading } = useAuth();

    return (
        <div className="h-full m-4 relative">
            <p className="text-white text-center text-4xl mt-10 ">
                <span>Money</span>
                <span className="text-[#6f8af8]">Mate</span>
            </p>
            <LoginPicture />
            <p className="text-white text-center text-3xl">Welcome back!</p>
            <button
                className={`bg-[#6f8af8] rounded-xl h-14 w-full absolute bottom-7 flex justify-center items-center`}
                onClick={handleLogin}
                disabled={isLoading}
            >
                {isLoading ? (
                    <Spinner size={20} />
                ) : (
                    <span className="text-white text-lg font-bold">
                        Continue with Google
                    </span>
                )}
            </button>
        </div>
    );
};
