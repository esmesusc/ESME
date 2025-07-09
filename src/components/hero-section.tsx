"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Key, ArrowRight, Sparkles } from "lucide-react"
import { easeInOut } from 'framer-motion';

export default function HeroSection() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: easeInOut,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  }

  return (
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br dark:from-slate-950 dark:via-slate-950 dark:to-orange-950 from-white via-orange-50/30 to-orange-100/50">
      {/* Optimized background elements */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#F58220]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8 ">
        

          {/* Main Heading */}
         
          <motion.h1
            variants={itemVariants}
            className="text-4xl  md:text-6xl lg:text-7xl font-bold dark:text-white text-[#1C1C1C] leading-tight"
          >
            Empowering Future{" "}
            <span className="bg-gradient-to-r from-[#F58220] to-[#D87016] bg-clip-text text-transparent">
              Engineers
            </span>
            <br />
            through Innovation &{" "}
            <span className="bg-gradient-to-r from-[#F58220] to-[#D87016] bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl dark:text-slate-200 text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Join Egypt&apos;s premier student chapter dedicated to advancing materials engineering through cutting-edge
            research, collaborative learning, and professional development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="bg-[#F58220] hover:bg-[#D87016] text-white px-8 py-4 text-lg font-semibold group"
              asChild
            >
              <motion.a
                href="#join"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Join ESME Today
                <motion.div
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#F58220] text-[#F58220] hover:bg-[#F58220] hover:text-white px-8 py-4 text-lg font-semibold bg-transparent"
              asChild
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Learn More
              </motion.a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 pt-16 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Active Members" },
              { number: "50+", label: "Projects Completed" },
              { number: "25+", label: "Industry Partners" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#F58220] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
   
    </section>
  )
}
