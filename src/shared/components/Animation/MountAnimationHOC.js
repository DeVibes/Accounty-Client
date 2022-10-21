import React from 'react';
import { motion } from "framer-motion";


export const MountAnimationHOC = ({ children }) => (
    <motion.span initial={hidden} animate={shown}>
        {children}
    </motion.span>
);

const hidden = {
    opacity: 0,
    scale: 0.1
};

const shown = {
    opacity: 1,
    scale: 1 
};