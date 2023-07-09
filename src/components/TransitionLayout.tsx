'use client'

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { useState } from "react"

const TransitionLayout = () => {
  const [selected, setSelected] = useState(false)

  return (
    <AnimateSharedLayout>
      <motion.div layoutId="container"
        className="flex space-x-4 items-center p-4 rounded-lg shadow-lg cursor-pointer backdrop-filter backdrop-blur-md bg-white bg-opacity-10"
        onClick={() => setSelected(!selected)}
      >
        <motion.div layoutId="icon"
          className="w-8 h-8 rounded-full bg-blue-500"
        />
        <motion.div layoutId="text"
          className="text-white"
        >
          {selected ? 'Item Selected' : 'Select Item'}
        </motion.div>
      </motion.div>
    </AnimateSharedLayout>
  )
}

export default TransitionLayout
