"use client"

import { useState, useEffect, useCallback } from "react"

interface LoadingOptions {
  minLoadTime?: number
  criticalAssets?: string[]
}

export function useOptimizedLoading(options: LoadingOptions = {}) {
  const { minLoadTime = 1500, criticalAssets = [] } = options

  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    assetsLoaded: false,
    minTimeElapsed: false,
    readyToShow: false,
  })

  const preloadAssets = useCallback(async () => {
    if (criticalAssets.length === 0) {
      setLoadingState((prev) => ({ ...prev, assetsLoaded: true }))
      return
    }

    try {
      const imagePromises = criticalAssets.map((src) => {
        return new Promise((resolve) => {
          const img = new Image()
          img.onload = img.onerror = resolve // Continue even if some fail
          img.src = src
        })
      })

      await Promise.all(imagePromises)
      setLoadingState((prev) => ({ ...prev, assetsLoaded: true }))
    } catch (error) {
      console.warn("Asset preloading failed:", error)
      setLoadingState((prev) => ({ ...prev, assetsLoaded: true }))
    }
  }, [criticalAssets])

  useEffect(() => {
    let isMounted = true

    // Start asset preloading
    preloadAssets()

    // Minimum loading time
    const minTimeTimer = setTimeout(() => {
      if (isMounted) {
        setLoadingState((prev) => ({ ...prev, minTimeElapsed: true }))
      }
    }, minLoadTime)

    return () => {
      isMounted = false
      clearTimeout(minTimeTimer)
    }
  }, [preloadAssets, minLoadTime])

  useEffect(() => {
    if (loadingState.assetsLoaded && loadingState.minTimeElapsed) {
      setLoadingState((prev) => ({ ...prev, readyToShow: true }))

      // Small delay for smooth transition
      const hideTimer = setTimeout(() => {
        setLoadingState((prev) => ({ ...prev, isLoading: false }))
      }, 200)

      return () => clearTimeout(hideTimer)
    }
  }, [loadingState.assetsLoaded, loadingState.minTimeElapsed])

  return loadingState
}
