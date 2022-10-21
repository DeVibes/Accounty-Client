import React from 'react'
import { motion } from "framer-motion";
import { TransactionItem } from './TransactionItem';

export const AnimatedTransactions = ({ transactions, selectedTransaction, setTr }) => {
    return (
        <motion.ul variants={list} initial="hidden" animate="visible">
            {transactions.map((tr, index) => 
                <motion.li variants={item}>
                    <TransactionItem data={tr}
                        handleClick={() => setTr(tr.id)}
                        isSelected={selectedTransaction === tr.id}
                        isAbsoluteFirst={index === transactions.length - 1}
                        key={index}
                    />
                </motion.li>   
            )}
        </motion.ul>
    );
};

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
