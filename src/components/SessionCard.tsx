import React from 'react';
import { motion } from 'framer-motion';

interface SessionCardProps {
    title: string;
    subtitle: string;
    content: React.ReactNode;
}

const SessionCard: React.FC<SessionCardProps> = ({
    title,
    subtitle,
    content,
}) => {
    return (
        <motion.div
            className="bg-white rounded-xl p-6 shadow-xl hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
        >
            {/* タイトル */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 text-center">{title}</h2>

            {/* サブタイトル */}
            <p className="text-gray-600 text-center mt-2 md:text-lg lg:text-xl">{subtitle}</p>

            {/* コンテンツ */}
            <div className="mt-6 mr-4 ml-4 text-gray-700">
                {content}
            </div>
        </motion.div>
    );
};

export default SessionCard;