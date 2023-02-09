import React from 'react';
import Spinner from '../../shared/components/Spinner';
import { GoogleIcon, LoginIcon } from '../../utils/icons';
import { useAuth } from './hook/auth.hook';

export const LoginView = () => {
    const { handleLogin, isLoading } = useAuth();

    return (
        <div className="flex flex-col items-center gap-8">
            <LoginIcon size={80} />
            <span className="text-white text-5xl">Sign in</span>
            <button
                className="bg-slate-300 rounded-xl p-2 flex items-center"
                onClick={handleLogin}
                disabled={isLoading}
            >
                {isLoading ? <Spinner size={20} /> : <GoogleIcon size={20} />}
                <span className="ml-3">Continue with Google</span>
            </button>
        </div>
    );
};
