import React from 'react';
import { motion } from 'framer-motion';

interface InfoPanelProps {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
    borderColor?: string;
    backgroundColor?: string;
    variant?: 'dark' | 'light';
}

const InfoPanel: React.FC<InfoPanelProps> = ({
    icon,
    title,
    content,
    backgroundColor = 'transparent',
    variant = 'dark',
}) => {
    const isDark = variant === 'dark';

    return (
        <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* タイトル */}
            <h2 className={`text-lg md:text-xl lg:text-2xl font-semibold mb-3 pt-2 tracking-wider border-b pb-2 inline-block ${isDark ? "text-blue-200 border-slate-700" : "text-blue-600 border-slate-300"}`}>{title}</h2>
            <div className={`flex items-start justify-between pb-4 rounded-md bg-${backgroundColor}`}>
                {/* テキストコンテンツ */}
                <div className="flex-grow pt-2">
                    {/* コンテンツ */}
                    <div className={`font-light leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        {content}
                    </div>
                </div>

                {/* アイコン */}
                <div className="ml-8 flex-shrink-0 opacity-80">
                    {icon}
                </div>
            </div>
        </motion.div>
    );
};

export default InfoPanel;