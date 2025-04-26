import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MenuToggleButtonProps {
    onToggle: () => void; // メニューの開閉状態を切り替える関数
}

const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({ onToggle }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // メニューが開いているかの状態

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        onToggle(); // 親コンポーネントにメニューの状態を通知
    };

    return (
        <>
            <motion.button
                className="text-white hover:text-gray-300 focus:outline-none"
                onClick={toggleMenu}
                aria-label="メニューを開く"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
            >
                {/* 三本線のアイコン */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </motion.button>

            {/* メニューウィンドウ（初期状態では非表示） */}
            <motion.div
                className={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-md text-white p-6 transform transition-transform duration-300 z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                initial={{ x: '100%' }}
                animate={{ x: isMenuOpen ? 0 : '100%' }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                {/* メニューコンテンツ */}
                <h2 className="text-2xl font-bold mb-4">メニュー</h2>
                <ul>
                    <li><a href="#" className="block py-2 hover:text-gray-300">アイテム1</a></li>
                    <li><a href="#" className="block py-2 hover:text-gray-300">アイテム2</a></li>
                    <li><a href="#" className="block py-2 hover:text-gray-300">アイテム3</a></li>
                </ul>
                {/* 閉じるボタン */}
                <button
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </motion.div>
        </>
    );
};

export default MenuToggleButton;