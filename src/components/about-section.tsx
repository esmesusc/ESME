"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Lightbulb, Award } from "lucide-react"

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To advance materials engineering through innovative research, education, and professional development while fostering collaboration between academia and industry.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be the leading student organization in Egypt, shaping the future of materials engineering and producing world-class engineers.",
    },
    {
      icon: Heart,
      title: "Values",
      description: "Excellence, Innovation, Collaboration, Integrity, and Continuous Learning drive everything we do.",
    },
  ]

  const achievements = [
    { icon: Users, number: "500+", label: "Members" },
    { icon: Lightbulb, number: "50+", label: "Projects" },
    { icon: Award, number: "25+", label: "Awards" },
  ]

  return (
    <section id="about" className="py-20 dark:bg-slate-950 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-[#1C1C1C] mb-6">
            About <span className="text-[#F58220]">ESME</span>
          </h2>
          <p className="text-xl dark:text-slate-200 text-gray-600 max-w-3xl mx-auto">
            The Egyptian Society of Materials Engineers is a dynamic student organization committed to advancing the
            field of materials engineering through innovation, education, and professional excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold dark:text-white text-[#1C1C1C] mb-6">Shaping Tomorrow&apos;s Materials Engineers</h3>
            <p className="text-gray-600 dark:text-slate-200 text-lg leading-relaxed mb-6">
              Founded with the vision of creating a bridge between academic excellence and industry innovation, ESME has
              grown into Egypt&apos;s premier materials engineering student organization. We provide our members with
              unparalleled opportunities for growth, learning, and professional development.
            </p>
            <p className="text-gray-600 dark:text-slate-200 text-lg leading-relaxed">
              Through cutting-edge research projects, industry partnerships, and collaborative initiatives, we&apos;re not
              just preparing students for careers—we&apos;re preparing them to lead the future of materials engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0  }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <achievement.icon className="w-8 h-8 text-[#F58220] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[#1C1C1C] mb-1">{achievement.number}</div>
                <div className="text-sm  text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#F58220] to-[#D87016] rounded-2xl flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl dark:text-white font-bold text-[#1C1C1C] mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-slate-200 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
