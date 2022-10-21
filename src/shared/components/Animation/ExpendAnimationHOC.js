import React from 'react';
import { motion } from "framer-motion";

export const ExpendAnimationHOC = ({ children, className, onClick }) => (
    <motion.span layout className={className} onClick={onClick}>
        {children}
    </motion.span>
);