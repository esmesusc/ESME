"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const partners = [
  { name: "ExxonMobil", logo: "/placeholder.svg?height=80&width=200" },
  { name: "SABIC", logo: "/placeholder.svg?height=80&width=200" },
  { name: "ArcelorMittal", logo: "/placeholder.svg?height=80&width=200" },
  { name: "BASF", logo: "/placeholder.svg?height=80&width=200" },
  { name: "DuPont", logo: "/placeholder.svg?height=80&width=200" },
  { name: "3M", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Dow Chemical", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Corning", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Applied Materials", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Honeywell", logo: "/placeholder.svg?height=80&width=200" },
]

const testimonials = [
  {
    quote:
      "ESME students consistently demonstrate exceptional technical skills and innovative thinking. They're exactly the kind of talent we look for in our materials research division.",
    author: "Dr. Ashraf Ibrahim",
    position: "R&D Director, Advanced Materials Corp",
    company: "Advanced Materials Corp",
  },
  {
    quote:
      "Our partnership with ESME has been invaluable. The students bring fresh perspectives to our challenges and have contributed to several breakthrough innovations.",
    author: "Ahmed El-Rashid",
    position: "Chief Technology Officer",
    company: "Egyptian Steel Industries",
  },
  {
    quote:
      "The quality of research and professionalism shown by ESME members is outstanding. We're proud to support such a dynamic organization.",
    author: "Hassan Ali ",
    position: "Materials Science Lead",
    company: "Global Polymers Inc",
  },
]

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 dark:bg-slate-950 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-[#1C1C1C] mb-6">
            Our <span className="text-[#F58220]">Partners</span>
          </h2>
          <p className="text-xl dark:text-slate-200 text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading companies and organizations to provide our members with real-world experience
            and career opportunities.
          </p>
        </motion.div>

        {/* Partners Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center dark:text-white text-[#1C1C1C] mb-12">What Our Partners Say</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <Quote className="w-8 h-8 text-[#F58220] mb-4" />
                    <p className="text-gray-600 dark:text-slate-200 leading-relaxed mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                    <div>
                      <div className="font-semibold dark:text-white text-[#1C1C1C]">{testimonial.author}</div>
                      <div className="text-sm dark:text-slate-200 text-gray-500">{testimonial.position}</div>
                      <div className="text-sm text-[#F58220] font-medium">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r dark:from-orange-100 dark:to-orange-200 from-gray-50 to-orange-50 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Interested in Partnering with ESME?</h3>
            <p className="text-lg dark:text-gray-800 text-gray-600 mb-6">
              Join our network of industry leaders and help shape the next generation of materials engineers through
              mentorship, internships, and collaboration.
            </p>
            <motion.a
              href="mailto:partnerships@esme.org"
              className="inline-flex items-center px-8 py-3 bg-[#F58220] hover:bg-[#D87016] text-white font-semibold rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
