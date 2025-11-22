import React from 'react';
import { motion } from 'framer-motion';

interface SessionCardProps {
    title: React.ReactNode;
    subtitle: string;
    content: React.ReactNode;
    variant?: 'dark' | 'light';
}

const SessionCard: React.FC<SessionCardProps> = ({
    title,
    subtitle,
    content,
    variant = 'dark',
}) => {
    const isDark = variant === 'dark';

    return (
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`
                ${isDark
                    ? "bg-slate-900/60 backdrop-blur-md border-slate-700/50 shadow-2xl hover:shadow-blue-900/20 text-slate-300"
                    : "bg-white border-slate-200 shadow-lg hover:shadow-xl text-slate-600"}
                border rounded-2xl p-8 transition-all duration-500 relative group
            `}
        >
            <div>
                {/* タイトル */}
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-center tracking-wide ${isDark ? "text-slate-100" : "text-slate-800"}`}>{title}</h2>

                {/* サブタイトル */}
                <p className={`text-center mt-3 md:text-lg lg:text-xl font-light tracking-widest ${isDark ? "text-blue-200/80" : "text-blue-500"}`}>{subtitle}</p>

                {/* コンテンツ */}
                <div className={`mt-8 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {content}
                </div>
            </div>

            {/* Shine Effect - Only for dark mode */}
            {isDark && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
            )}
        </motion.div>
    );
};

export default SessionCard;