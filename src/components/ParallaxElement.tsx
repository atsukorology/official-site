import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxElementProps {
    children: React.ReactNode;
    offset?: number; // How many pixels to move. Positive = moves up faster (or down slower), Negative = moves down faster
    className?: string;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({ children, offset = 50, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -offset]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};

export default ParallaxElement;
