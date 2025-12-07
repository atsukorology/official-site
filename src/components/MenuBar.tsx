import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 text-white py-4 px-6 flex items-center justify-between"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* 左側：アイコンとタイトル */}
            <div className="flex items-center space-x-2">
                <Link to="/portal" className="hover:opacity-80 transition-opacity mr-4">
                    <BrandIcon width="4em" height="3em" strokeWidth="0.7" />
                </Link>
                <Link to="/atsukorology" className="hover:opacity-80 transition-opacity">
                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold">Atsukorology</span>
                </Link>
            </div>

            {/* 右側：予約ボタンとメニューボタン */}
            <div className="flex items-center space-x-6">
                <Button onClick={handleReservationClick}>Reservation</Button>
                {/* メニュー展開用ボタン */}
            </div>
        </motion.nav>
    );
};

export default MenuBar;