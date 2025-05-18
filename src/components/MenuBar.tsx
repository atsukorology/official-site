import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import MenuToggleButton from './MenuToggleButton';
import BrandIcon from './BrandIcon';

const MenuBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleReservationClick = () => {
        const plansSection = document.getElementById('session-plans');
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/50 text-white py-4 px-6 flex items-center justify-between"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* 左側：アイコンとタイトル */}
            <div className="flex items-center space-x-2">
                {/* アイコン (仮のアイコンを使用) */}
                <div className="mr-4">
                    <BrandIcon width="4em" height="3em" strokeWidth="0.7" />
                </div>
                <span className="text-xl font-semibold">Atsukorology</span>
            </div>

            {/* 右側：予約ボタンとメニューボタン */}
            <div className="flex items-center space-x-4">
                <Button onClick={handleReservationClick}>Reservation</Button>
                {/* メニュー展開用ボタン */}
            </div>
        </motion.nav>
    );
};

export default MenuBar;