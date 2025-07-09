"use client"

import { useState, useEffect } from "react"

interface LoadingSequenceOptions {
  minLoadTime?: number
  assetsToPreload?: string[]
}

export function useLoadingSequence(options: LoadingSequenceOptions = {}) {
  const { minLoadTime = 2000, assetsToPreload = [] } = options

  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const [minTimeElapsed, setMinTimeElapsed] = useState(false)

  useEffect(() => {
    const startTime = Date.now()

    // Preload assets
    const preloadAssets = async () => {
      if (assetsToPreload.length === 0) {
        setAssetsLoaded(true)
        return
      }

      const totalAssets = assetsToPreload.length
      let loadedCount = 0

      const loadPromises = assetsToPreload.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image()
          img.onload = img.onerror = () => {
            loadedCount++
            setProgress((loadedCount / totalAssets) * 100)
            resolve()
          }
          img.src = src
        })
      })

      await Promise.all(loadPromises)
      setAssetsLoaded(true)
    }

    // Ensure minimum loading time
    const minTimeTimer = setTimeout(() => {
      setMinTimeElapsed(true)
    }, minLoadTime)

    preloadAssets()

    return () => clearTimeout(minTimeTimer)
  }, [minLoadTime, assetsToPreload])

  useEffect(() => {
    if (assetsLoaded && minTimeElapsed) {
      // Add a small delay for smooth transition
      const exitTimer = setTimeout(() => {
        setIsLoading(false)
      }, 300)

      return () => clearTimeout(exitTimer)
    }
  }, [assetsLoaded, minTimeElapsed])

  return {
    isLoading,
    progress,
    assetsLoaded,
    minTimeElapsed,
  }
}
