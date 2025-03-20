import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import titleImage from './assets/title-background.jpg'; // 画像をインポート

function App() {
  return (
    <div className="contain">
      <motion.div
        className="company"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        COMPANY
      </motion.div>
      <motion.div
        className="reservation"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        reservation about
      </motion.div>
      <motion.div className="title-container">
        <motion.h1
          className="title"
        >
          TITLE
        </motion.h1>
      </motion.div>
      {/* その他のコンテンツ */}
    </div>
  );
}

export default App;