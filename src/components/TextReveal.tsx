import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, width = "fit-content", delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "10000px 0px -35% 0px" });

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: delay, ease: [0.2, 0.65, 0.3, 0.9] }} // Apple-like ease
            >
                {children}
            </motion.div>
        </div>
    );
};

export default TextReveal;
