"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export default function OptimizedImage({ src, alt, className, width, height }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
          animate={{ x: [-100, 100] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      )}

      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        initial={{ scale: 1.1 }}
        animate={{ scale: isLoaded ? 1 : 1.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  )
}
