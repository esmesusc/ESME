"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Github } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  department: string
  year: string
  image: string
  bio: string
  linkedin?: string
  email?: string
  github?: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ahmed Ali",
    role: "President",
    department: "Materials Engineering",
    year: "4th Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Passionate about nanomaterials and their applications in renewable energy. Leading ESME towards innovation and excellence.",
    linkedin: "https://linkedin.com/in/ahmed-ali",
    email: "ahmed.ali@esme.org",
    github: "https://github.com/ahmed-ali",
  },
  {
    id: 2,
    name: "Yousef Hassan",
    role: "Vice President",
    department: "Materials Engineering",
    year: "4th Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Specializing in polymer science and sustainable materials. Committed to advancing materials engineering education.",
    linkedin: "https://linkedin.com/in/sara-mohamed",
    email: "sara.mohamed@esme.org",
  },
  {
    id: 3,
    name: "Omar Ali",
    role: "Technical Manager",
    department: "Materials Engineering",
    year: "3rd Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in metallurgy and materials characterization. Overseeing technical projects and research initiatives.",
    linkedin: "https://linkedin.com/in/omar-ali",
    email: "omar.ali@esme.org",
    github: "https://github.com/omar-ali",
  },
  {
    id: 4,
    name: "Ahmed Mohamed",
    role: "IT Manger",
    department: "Materials Engineering",
    year: "3rd Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Focused on ceramic materials and high-temperature applications. Coordinating research collaborations with industry.",
    linkedin: "https://linkedin.com/in/fatma-khaled",
    email: "fatma.khaled@esme.org",
  },
  {
    id: 5,
    name: "Mohamed Youssef",
    role: "Secretary Manager",
    department: "Materials Engineering",
    year: "2nd Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Organizing workshops, seminars, and networking events. Building bridges between students and industry professionals.",
    linkedin: "https://linkedin.com/in/mohamed-youssef",
    email: "mohamed.youssef@esme.org",
  },
  {
    id: 6,
    name: "Nour Abdel",
    role: "PR Manager",
    department: "Materials Engineering",
    year: "2nd Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Managing communications and partnerships. Passionate about promoting materials engineering to the wider community.",
    linkedin: "https://linkedin.com/in/nour-abdel",
    email: "nour.abdel@esme.org",
  },
  {
    id: 7,
    name: "Yousef Hassan",
    role: "HR Manager",
    department: "Materials Engineering",
    year: "3rd Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Managing budgets and financial planning for ESME activities. Ensuring sustainable growth and resource allocation.",
    linkedin: "https://linkedin.com/in/yasmin-ahmed",
    email: "yasmin.ahmed@esme.org",
  },
  {
    id: 8,
    name: "Karim Mostafa",
    role: "Marketing Manager",
    department: "Materials Engineering",
    year: "2nd Year",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creating engaging content and managing social media presence. Showcasing ESME's achievements and opportunities.",
    linkedin: "https://linkedin.com/in/karim-mostafa",
    email: "karim.mostafa@esme.org",
    github: "https://github.com/karim-mostafa",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20 dark:bg-slate-950 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-[#1C1C1C] mb-6">
            Meet Our <span className="text-[#F58220]">Team</span>
          </h2>
          <p className="text-xl dark:text-slate-200 text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of passionate materials engineering students working together to advance our field and
            support our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative group">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 "
                    />

                    {/* Social Links Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {member.linkedin && (
                        <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white" asChild>
                          <motion.a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Linkedin className="w-5 h-5 text-blue-600" />
                          </motion.a>
                        </Button>
                      )}
                      {member.email && (
                        <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white" asChild>
                          <motion.a
                            href={`mailto:${member.email}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Mail className="w-5 h-5 text-gray-600" />
                          </motion.a>
                        </Button>
                      )}
                      {member.github && (
                        <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white" asChild>
                          <motion.a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-5 h-5 text-gray-800" />
                          </motion.a>
                        </Button>
                      )}
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl dark:text-white font-bold text-[#1C1C1C] mb-1">{member.name}</h3>
                    <div className="text-[#F58220] font-semibold mb-2">{member.role}</div>
                    <div className="text-sm dark:text-slate-200 text-gray-600 mb-3">
                      {member.department} • {member.year}
                    </div>
                    <p className="text-gray-600 dark:text-slate-200 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#F58220] to-[#D87016] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-lg mb-6 opacity-90">
              We&apos;re always looking for passionate materials engineering students to join our leadership team and make a
              difference.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-[#F58220] hover:bg-gray-100" asChild>
              <motion.a href="#join" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Apply Now
              </motion.a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
