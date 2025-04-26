import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    normalColor?: string;
    hoverColor?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, normalColor = 'rgba(255,255,255,1.0)', hoverColor = 'rgba(0,0,0,1.0)' }) => {
    return (
        <motion.button
            className={`border rounded-md py-2 px-4 transition-colors duration-50`}
            style={{
                backgroundColor: "rgba(255,255,255,0.0)",
                color: normalColor, // 文字色
                borderColor: normalColor, // 枠線の色
            }}
            onClick={onClick}
            whileHover={{
                scale: 1.05, // ホバー時に少し拡大
                color: hoverColor, // ホバー時の文字色
                backgroundColor: normalColor, // ホバー時の背景色
                borderColor: normalColor, // ホバー時の枠線の色
            }}
            whileTap={{ scale: 0.95 }}   // クリック時に少し縮小
        >
            {children}
        </motion.button>
    );
};

export default Button;