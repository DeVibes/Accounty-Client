import React from 'react'
import { motion } from "framer-motion"

export const SlideAnimationHOC = ({ children, trigger, elementWidth, direction="right", className }) => {
    const initialState = { x: direction === "right" ? elementWidth * -1 : elementWidth };
    const onClickState = { x: 0 };
    return (
        <motion.span initial={initialState} className={className}
            animate={trigger ? onClickState : initialState}
        >
            {children}
        </motion.span>
    );
};