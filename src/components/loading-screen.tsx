"use client"

import { motion } from "framer-motion"
import { Key, Loader2 } from "lucide-react"
import Image from "next/image"

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
    >
      <div className="text-center">
        {/* Logo Container */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
        >
          {/* Main Logo */}
          <motion.div
            className="  flex items-center justify-center mx-auto "
           
          >
            <Image src={'/ESME_black.png'} className="" alt="" width={180} height={180} />
          {/* <Loader2 className="animate-spin w-4 h-4 text-[#F58220]" /> */}
          </motion.div>

          {/* Subtle pulse ring */}
        
        </motion.div>

        {/* Brand Text */}
     
        {/* Simple loading indicator */}
        <motion.div
          className="mt-8 flex justify-center space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-[#F58220] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
