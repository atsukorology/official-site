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
            <h2 className="text-2xl font-semibold text-gray-800 text-center">{title}</h2>

            {/* サブタイトル */}
            <p className="text-gray-600 text-center mt-2">{subtitle}</p>

            {/* コンテンツ */}
            <div className="mt-10 mr-10 ml-10 text-gray-700">
                {content}
            </div>
        </motion.div>
    );
};

export default SessionCard;