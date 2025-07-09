"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"

interface SmoothTransitionProps {
  children: ReactNode
  isVisible: boolean
  delay?: number
}

export default function SmoothTransition({ children, isVisible, delay = 0 }: SmoothTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.4,
              ease: "easeIn",
            },
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
