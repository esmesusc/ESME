"use client"

import { useEffect, useState } from "react"

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const criticalAssets = [
      // Hero section assets
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=250&width=400",
      "/placeholder.svg?height=200&width=400",
      "/placeholder.svg?height=80&width=200",
    ]

    const preloadAssets = async () => {
      const totalAssets = criticalAssets.length
      let loadedAssets = 0

      const loadPromises = criticalAssets.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image()
          img.onload = img.onerror = () => {
            loadedAssets++
            setProgress((loadedAssets / totalAssets) * 100)
            resolve()
          }
          img.src = src
        })
      })

      await Promise.all(loadPromises)

      // Ensure minimum loading time for smooth UX
      const minLoadTime = 2000
      const loadTime = Date.now() - startTime

      if (loadTime < minLoadTime) {
        await new Promise((resolve) => setTimeout(resolve, minLoadTime - loadTime))
      }

      onComplete()
    }

    const startTime = Date.now()
    preloadAssets()
  }, [onComplete])

  return null // This component doesn't render anything
}
