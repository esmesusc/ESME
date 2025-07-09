"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import EventsSection from "@/components/events-section"
import ProjectsSection from "@/components/projects-section"
import TeamSection from "@/components/team-section"
import PartnersSection from "@/components/partners-section"
import JoinUsSection from "@/components/join-us-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import LoadingScreen from "@/components/loading-screen"

export default function HomePage() {
  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    assetsLoaded: false,
    readyToShow: false,
  })
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    let isMounted = true

    const initializeApp = async () => {
      // Preload critical assets
      const criticalAssets = [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=250&width=400",
        "/placeholder.svg?height=200&width=400",
        "/placeholder.svg?height=80&width=200",
      ]

      try {
        // Preload images
        await Promise.all(
          criticalAssets.map((src) => {
            return new Promise((resolve, reject) => {
              const img = new Image()
              img.onload = resolve
              img.onerror = resolve // Continue even if some images fail
              img.src = src
            })
          }),
        )

        if (isMounted) {
          setLoadingState((prev) => ({ ...prev, assetsLoaded: true }))
        }
      } catch (error) {
        console.warn("Asset preloading failed:", error)
        if (isMounted) {
          setLoadingState((prev) => ({ ...prev, assetsLoaded: true }))
        }
      }

      // Minimum loading time for smooth UX (1.5s)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (isMounted) {
        setLoadingState((prev) => ({ ...prev, readyToShow: true }))

        // Hide loading screen after content is ready
        setTimeout(() => {
          if (isMounted) {
            setLoadingState((prev) => ({ ...prev, isLoading: false }))
          }
        }, 200)
      }
    }

    initializeApp()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="relative">
      <AnimatePresence mode="wait">{loadingState.isLoading && <LoadingScreen key="loading" />}</AnimatePresence>

      <AnimatePresence>
        {loadingState.readyToShow && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1], // Custom easing for smoothness
            }}
          >
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F58220] to-[#D87016] z-50"
              style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
            />

            <Navbar />

            <main>
              <HeroSection />
              <AboutSection />
              <EventsSection />
              <ProjectsSection />
              <TeamSection />
              <PartnersSection />
              <JoinUsSection />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
