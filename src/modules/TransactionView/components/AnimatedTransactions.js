import React, { Fragment } from 'react'
import { motion } from "framer-motion";
import { TransactionItem } from './TransactionItem';

export const AnimatedTransactions = ({ pagedTransactions }) => ( 
    <motion.ul variants={list} initial="hidden" animate="visible">
        {pagedTransactions.map((page, index) => 
            <Fragment key={index}>
                {page.transactions.map(tr => (
                    <motion.li variants={item} key={tr.id}>
                        <TransactionItem data={tr}
                            isAbsoluteFirst={index === page.transactions.length - 1}
                        />
                    </motion.li>
                ))}
            </Fragment>
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
