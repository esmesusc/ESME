"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, X, Clock } from "lucide-react"
import Image from "next/image"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  category: "workshop" | "competition" | "seminar" | "networking"
  attendees: number
  description: string
  image: string
  status: "upcoming" | "past"
}

const events: Event[] = [
  {
    id: 1,
    title: "Advanced Nanomaterials Workshop",
    date: "2024-02-15",
    time: "10:00 AM - 4:00 PM",
    location: "Materials Lab, Faculty of Engineering",
    category: "workshop",
    attendees: 45,
    description:
      "Hands-on workshop exploring the latest developments in nanomaterials, including synthesis techniques, characterization methods, and applications in various industries.",
    image: "/placeholder.svg?height=200&width=400",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Materials Innovation Competition",
    date: "2024-03-01",
    time: "9:00 AM - 6:00 PM",
    location: "Engineering Auditorium",
    category: "competition",
    attendees: 120,
    description:
      "Annual competition where students present innovative materials solutions to real-world problems. Judged by industry experts with cash prizes for winners.",
    image: "/placeholder.svg?height=200&width=400",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Industry Leaders Seminar",
    date: "2024-01-20",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium",
    category: "seminar",
    attendees: 200,
    description:
      "Leading professionals from top materials companies share insights on career opportunities, industry trends, and future technologies.",
    image: "/placeholder.svg?height=200&width=400",
    status: "past",
  },
  {
    id: 4,
    title: "Alumni Networking Night",
    date: "2024-02-28",
    time: "6:00 PM - 9:00 PM",
    location: "University Club",
    category: "networking",
    attendees: 80,
    description:
      "Connect with ESME alumni working in leading companies worldwide. Great opportunity for mentorship and career guidance.",
    image: "/placeholder.svg?height=200&width=400",
    status: "upcoming",
  },
]

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  const filteredEvents = events.filter((event) => {
    const statusMatch = filter === "all" || event.status === filter
    const categoryMatch = categoryFilter === "all" || event.category === categoryFilter
    return statusMatch && categoryMatch
  })

  const categoryColors = {
    workshop: "bg-blue-100 text-blue-800",
    competition: "bg-green-100 text-green-800",
    seminar: "bg-purple-100 text-purple-800",
    networking: "bg-orange-100 text-orange-800",
  }

  return (
    <section id="events" className="py-20 dark:bg-slate-950 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-[#1C1C1C] mb-6">
            Events & <span className="text-[#F58220]">Activities</span>
          </h2>
          <p className="text-xl dark:text-slate-200 text-gray-600 max-w-3xl mx-auto">
            Join our diverse range of events designed to enhance your knowledge, expand your network, and accelerate
            your career in materials engineering.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-center mb-12"
        >
          <div className="flex gap-2">
            {["all", "upcoming", "past"].map((status) => (
              <Button
                key={status}
                variant={filter === status ? "default" : "outline"}
                onClick={() => setFilter(status as any)}
                className={filter === status ? "bg-[#F58220] dark:text-white  hover:bg-[#D87016]" : ""}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row  gap-2">

            {["all", "workshop", "competition", "seminar", "networking"].map((category) => (
              <Button

                key={category}
                variant={categoryFilter === category ? "default" : "outline"}
                onClick={() => setCategoryFilter(category)}
                className={categoryFilter === category ? "bg-[#F58220] dark:text-white hover:bg-[#D87016]" : ""}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full  cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0 " onClick={() => setSelectedEvent(event)}>
                    <div className="relative">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={categoryColors[event.category]}>{event.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className=" dark:text-white flex items-center justify-center" variant={event.status === "upcoming" ? "default" : "secondary"}>{event.status}</Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold dark:text-white text-[#1C1C1C] mb-3 line-clamp-2">{event.title}</h3>

                      <div className="space-y-2 text-sm dark:text-gray-200 text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-200 text-sm line-clamp-3">{event.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Event Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e: any) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedEvent.image || "/placeholder.svg"}
                    alt={selectedEvent.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                    onClick={() => setSelectedEvent(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    <Badge className={categoryColors[selectedEvent.category]}>{selectedEvent.category}</Badge>
                    <Badge variant={selectedEvent.status === "upcoming" ? "default" : "secondary"}>
                      {selectedEvent.status}
                    </Badge>
                  </div>

                  <h3 className="text-3xl font-bold text-[#1C1C1C] mb-6">{selectedEvent.title}</h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-[#F58220]" />
                      <span>{new Date(selectedEvent.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#F58220]" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#F58220]" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-[#F58220]" />
                      <span>{selectedEvent.attendees} attendees</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">{selectedEvent.description}</p>

                  {selectedEvent.status === "upcoming" && (
                    <Button className="w-full bg-[#F58220] hover:bg-[#D87016] text-white">Register Now</Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
