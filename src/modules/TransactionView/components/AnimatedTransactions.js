import React from 'react'
import { motion } from "framer-motion";
import { TransactionItem } from './TransactionItem';

export const AnimatedTransactions = ({ transactions }) => (
    <motion.ul variants={list} initial="hidden" animate="visible">
        {transactions.map((tr, index) => 
            <motion.li variants={item} key={index}>
                <TransactionItem data={tr}
                    isAbsoluteFirst={index === transactions.length - 1}
                />
            </motion.li>   
        )}
    </motion.ul>
);

const list = {
    visible: { 
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        }
    },
    hidden: { 
        opacity: 0,
        transition: {
            when: "afterChildren",
        }
    },
};

const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}
