import React from 'react';
import { shallow } from 'zustand/shallow';
import { LoginView } from '../../modules/LoginView';
import { Feedback } from '../../shared/components/Feedback';
import { useFeedbackStore } from '../../shared/state/feedbackStore';

export const LoginPage = () => {
    const { isFeedbackOpen, msg, closeFeedback } = useFeedbackStore(
        (state) => ({
            isFeedbackOpen: state.isOpen,
            msg: state.msg,
            closeFeedback: state.closeFeedback,
        }),
        shallow
    );
    return (
        <div className="h-screen flex justify-center items-center">
            <LoginView />
            <Feedback
                isVisible={isFeedbackOpen}
                handleClose={closeFeedback}
                msg={msg}
            />
        </div>
    );
};
