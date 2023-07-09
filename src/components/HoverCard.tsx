'use client'

import { motion } from 'framer-motion'

const HoverCard = () => {
  return (
    <motion.div 
      className="p-6 bg-black bg-opacity-60 rounded-lg shadow-lg backdrop-filter backdrop-blur-md transition-all transform duration-200 ease-in-out hover:scale-105 hover:bg-opacity-90"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <h2 className="text-lg font-semibold mb-2 text-white">Hoverable Card</h2>
      <p className="text-white">Hover to see the effect!</p>
    </motion.div>
  )
}

export default HoverCard
