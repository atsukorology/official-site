import React from 'react';
import { motion } from 'framer-motion';

const AuroraBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Blob 1: Blue-ish */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-blue-900/20 rounded-full blur-[100px] mix-blend-screen"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Blob 2: Purple/Slate-ish */}
            <motion.div
                className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-slate-800/30 rounded-full blur-[100px] mix-blend-screen"
                animate={{
                    x: [0, -50, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Blob 3: Bottom Center */}
            <motion.div
                className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[80vw] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
            />
        </div>
    );
};

export default AuroraBackground;
