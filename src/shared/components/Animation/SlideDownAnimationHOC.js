import React from 'react';
import { motion } from "framer-motion";

export const SlideDownAnimationHOC = ({ children, trigger, elementHeight, className }) => {
    const initialState = { y: elementHeight * -1 };
    const onClickState = { y: 0 };
    return (
        <motion.section initial={initialState} className={className}
            animate={trigger ? onClickState : initialState}
        >
            {children}
        </motion.section>
    );
};
