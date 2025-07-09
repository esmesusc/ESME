"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Key, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Partners", href: "#partners" },
    { name: "Join Us", href: "#join" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/esme.egypt", color: "hover:text-blue-600" },
    { icon: Twitter, href: "https://twitter.com/esme_egypt", color: "hover:text-blue-400" },
    { icon: Instagram, href: "https://instagram.com/esme.egypt", color: "hover:text-pink-600" },
    { icon: Linkedin, href: "https://linkedin.com/company/esme-egypt", color: "hover:text-blue-700" },
    { icon: Youtube, href: "https://youtube.com/c/esmeegypt", color: "hover:text-red-600" },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#1C1C1C] dark:bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className=" flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
              <Image src='/ESME_logo_white.png' alt="ESME Logo" width={100} height={100} />
              </motion.div>

              <div>
               
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering the next generation of materials engineers through innovation, collaboration, and excellence in
              education and research.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#F58220] transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F58220] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Faculty of Petroleum and Mining Engineering</p>
                  <p className="text-gray-300">Suez University, Suez</p>
                  <p className="text-gray-300">Egypt</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F58220]" />
                <a href="mailto:info@esme.org" className="text-gray-300 hover:text-[#F58220] transition-colors">
                  info@esme.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F58220]" />
                <a href="tel:+201234567890" className="text-gray-300 hover:text-[#F58220] transition-colors">
                  +20 123 456 7890
                </a>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest news, events, and opportunities.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#F58220]"
              />
              <Button type="submit" className="w-full bg-[#F58220] hover:bg-[#D87016] text-white">
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Subscribe
                </motion.span>
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Egyptian Society of Materials Engineers (ESME). All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#F58220] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#F58220] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-[#F58220] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
