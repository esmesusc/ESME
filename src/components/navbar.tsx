"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Key } from "lucide-react"
import Image from "next/image"
import { ModeToggle } from "./mode-toggle"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(10px)"])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Magazines", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Partners", href: "#partners" },
  ]

  return (
    <motion.nav
      className="fixed  top-0 left-0 right-0 z-40 px-4 py-2 "
      style={{  backdropFilter: backdropBlur }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        <motion.div
          className="flex items-center space-x-2 dark:hidden rounded-lg "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          
          <Image src='/ESME_black.png' alt="ESME Logo" width={80} height={80} /> 
        </motion.div>
          <motion.div
          className="items-center space-x-2 hidden dark:flex rounded-lg "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          
          <Image src='/ESME_logo_white.png' alt="ESME Logo" width={80} height={80} /> 
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ModeToggle />
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-[#1C1C1C] dark:text-white hover:text-[#F58220] transition-colors relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -2 }}
            >
              {item.name}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F58220]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Button className="bg-[#F58220] hover:bg-[#D87016] text-white" asChild>
              <motion.a
                href="#join"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Join Us
              </motion.a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">

        <ModeToggle  />
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </Button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ overflow: "hidden" }}
      >
        <div className="pt-4 pb-2 bg-white dark:bg-slate-950 space-y-2">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-[#1C1C1C] dark:text-white hover:text-[#F58220] hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
          <div className="px-4 pt-2">
            <Button className="w-full bg-[#F58220] hover:bg-[#D87016] text-white" asChild>
              <motion.a href="#join" onClick={() => setIsOpen(false)} whileTap={{ scale: 0.95 }}>
                Join Us
              </motion.a>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
