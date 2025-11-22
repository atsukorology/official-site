import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StaggeredListProps {
    children: React.ReactNode;
    staggerDelay?: number;
    className?: string;
}

const StaggeredList: React.FC<StaggeredListProps> = ({ children, staggerDelay = 0.2, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "10000px 0px -35% 0px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggeredItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};

export default StaggeredList;
