'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const AnimatedCard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleModeChange = () => setIsDarkMode(!isDarkMode)

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <motion.div 
        className={`p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <h2 className="text-lg font-semibold mb-2">Animated Card</h2>
        <p>Welcome to the card!</p>
      </motion.div>
      <button 
        onClick={handleModeChange} 
        className={`p-4 mt-4 rounded-lg shadow-md backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} 
      >
        Toggle Dark Mode
      </button>
    </div>
  )
}

export default AnimatedCard
