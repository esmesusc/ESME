"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Users, Calendar } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  category: "metallurgy" | "polymers" | "nano" | "ceramics" | "composites"
  image: string
  team: string[]
  date: string
  // status: "completed" | "ongoing"
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Self-Healing Concrete",
    description:
      "Development of concrete with embedded microcapsules containing healing agents that activate when cracks form, extending infrastructure lifespan by 50%.",
    category: "composites",
    image: "/placeholder.svg?height=250&width=400",
    team: ["Ahmed Hassan", "Sara Mohamed", "Omar Ali"],
    date: "2024-01-15",
    // status: "completed",
    technologies: ["Materials Testing", "Microscopy", "Chemical Analysis"],
    githubUrl: "https://github.com/esme/smart-concrete",
    demoUrl: "https://demo.esme.org/concrete",
  },
  {
    id: 2,
    title: "Graphene-Enhanced Solar Cells",
    description:
      "Research on incorporating graphene nanosheets into perovskite solar cells to improve efficiency and stability under various environmental conditions.",
    category: "nano",
    image: "/placeholder.svg?height=250&width=400",
    team: ["Fatma Khaled", "Mohamed Youssef", "Nour Abdel"],
    date: "2024-02-01",
    // status: "ongoing",
    technologies: ["Nanofabrication", "Photovoltaics", "Characterization"],
    githubUrl: "https://github.com/esme/graphene-solar",
        demoUrl: "https://demo.esme.org/concrete",

  },
  {
    id: 3,
    title: "Biodegradable Packaging Materials",
    description:
      "Creating eco-friendly packaging solutions using modified starch-based polymers with enhanced barrier properties and controlled degradation rates.",
    category: "polymers",
    image: "/placeholder.svg?height=250&width=400",
    team: ["Yasmin Ahmed", "Karim Mostafa", "Aya Mahmoud"],
    date: "2023-11-20",
    // status: "completed",
    technologies: ["Polymer Chemistry", "Biodegradation Testing", "Mechanical Testing"],
    githubUrl: "https://github.com/esme/bio-packaging",
    demoUrl: "https://demo.esme.org/packaging",
  },
  
]


export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all")

  const filteredProjects = projects.filter((project) => filter === "all" || project.category === filter)

  const categoryColors = {
    metallurgy: "bg-red-100 text-red-800",
    polymers: "bg-blue-100 text-blue-800",
    nano: "bg-green-100 text-green-800",
    ceramics: "bg-purple-100 text-purple-800",
    composites: "bg-orange-100 text-orange-800",
  }

  return (
    <section id="projects" className="py-20 dark:bg-slate-950 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-[#1C1C1C] mb-6">
            ESME <span className="text-[#F58220]">Magazines</span>
          </h2>
          <p className="text-xl dark:text-slate-200 text-gray-600 max-w-3xl mx-auto">
            Explore our library of ESME Magazines that are shaping the future of materials
            engineering.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {["all", "metallurgy", "polymers", "nano", "ceramics", "composites"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category ? "bg-[#F58220] text-white hover:bg-[#D87016]" : ""}
            >
              {category === "all" ? "All Magazines" : category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={categoryColors[project.category]}>{project.category}</Badge>
                      </div>
                      {/* <div className="absolute top-4 right-4">
                        <Badge className="text-white flex items-center justify-center" variant={project.status === "completed" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div> */}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl dark:text-white font-bold text-[#1C1C1C] mb-3 line-clamp-2">{project.title}</h3>

                      <p className="text-gray-600 dark:text-slate-200 text-sm mb-4 line-clamp-3">{project.description}</p>

                      {/* <div className="flex items-center gap-2 text-sm dark:text-slate-200 text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(project.date).toLocaleDateString()}</span>
                        <Users className="w-4 h-4 ml-2" />
                        <span>{project.team.length} members</span>
                      </div> */}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 2} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {/* {project.githubUrl && (
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </motion.a>
                          </Button>
                        )} */}
                        {project.demoUrl && (
                          <Button size="sm" className="flex-1 text-white bg-[#F58220] hover:bg-[#D87016]" asChild>
                            <motion.a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Read
                            </motion.a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
