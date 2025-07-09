"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Users, BookOpen, Award, Network } from "lucide-react"
import { Separator } from "./ui/separator"

const benefits = [
  {
    icon: Users,
    title: "Professional Network",
    description: "Connect with industry leaders, alumni, and peers in materials engineering",
  },
  {
    icon: BookOpen,
    title: "Learning Opportunities",
    description: "Access to workshops, seminars, and hands-on training programs",
  },
  {
    icon: Award,
    title: "Recognition & Awards",
    description: "Showcase your achievements and compete in prestigious competitions",
  },
  {
    icon: Network,
    title: "Industry Connections",
    description: "Direct access to internships and job opportunities with partner companies",
  },
]

const faqs = [
  {
    question: "Who can join ESME?",
    answer:
      "ESME is open to all materials engineering students at any level of study. We welcome undergraduate and graduate students who are passionate about materials science and engineering.",
  },
  {
    question: "What are the membership requirements?",
    answer:
      "Members must be enrolled in a materials engineering program, maintain good academic standing, and actively participate in at least 3 ESME activities per semester.",
  },
  {
    question: "Are there membership fees?",
    answer:
      "No it is volunteering activity",
  },
  {
    question: "What activities does ESME organize?",
    answer:
      "We organize technical workshops, industry visits, research competitions, networking events, career fairs, and collaborative projects with industry partners.",
  },
  {
    question: "How can I get involved in leadership?",
    answer:
      "Leadership positions are available through annual elections. Members can also volunteer for committees and project teams to gain leadership experience.",
  },
  {
    question: "Do you offer mentorship programs?",
    answer:
      "Yes! We have both peer mentorship for new members and professional mentorship programs connecting students with industry professionals and alumni.",
  },
]

export default function JoinUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    year: "",
    interests: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="join" className="py-20  dark:bg-slate-950  bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-[#1C1C1C] mb-6">
            Join <span className="text-[#F58220]">ESME</span> Today
          </h2>
          <p className="text-xl dark:text-slate-200 text-gray-600 max-w-3xl mx-auto">
            Become part of Egypt&apos;s most dynamic materials engineering community and unlock your potential for innovation
            and leadership.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#F58220] to-[#D87016] rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold dark:text-white text-[#1C1C1C] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-slate-200 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold dark:text-white text-[#1C1C1C] mb-6">Contact Us</h3>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Input
                          name="name"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Input
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Input
                          name="university"
                          placeholder="University/Institution *"
                          value={formData.university}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Input
                          name="year"
                          placeholder="Academic Year (e.g., 2nd Year) *"
                          value={formData.year}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Input
                          name="interests"
                          placeholder="Areas of Interest (e.g., Nanomaterials, Polymers)"
                          value={formData.interests}
                          onChange={handleInputChange}
                          className="h-12"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <Textarea
                          name="message"
                          placeholder="what do you have on your mind?"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 bg-[#F58220] hover:bg-[#D87016] text-white font-semibold"
                        >
                          <motion.div
                          >
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      >
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      </motion.div>
                      <h4 className="text-2xl font-bold dark:text-white text-[#1C1C1C] mb-2">Application Submitted!</h4>
                      <p className="dark:text-slate-200 text-gray-600 mb-6">
                        Thank you for your interest in joining ESME. We&apos;ll review your application and get back to you
                        within 3-5 business days.
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            university: "",
                            year: "",
                            interests: "",
                            message: "",
                          })
                        }}
                        variant="outline"
                        className="border-[#F58220] text-[#F58220] hover:bg-[#F58220] hover:text-white"
                      >
                        Submit Another Application
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl dark:text-white font-bold text-[#1C1C1C] mb-6">Frequently Asked Questions</h3>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-slate-950 rounded-lg px-6 dark:bg-slate-800 bg-white shadow-sm"
                  >
                    <AccordionTrigger className="text-left dark:text-white font-semibold text-[#1C1C1C] hover:text-[#F58220] transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-slate-200 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-[#F58220] to-[#D87016] rounded-lg text-white"
            >
              <h4 className="text-lg font-bold mb-2">Still have questions?</h4>
              <p className="mb-4 opacity-90">Our team is here to help! Reach out to us for more information.</p>
              <div className="space-y-2 text-sm">
                <div>📧 info@esme.org</div>
                <div>📱 +20 123 456 7890</div>
                <div>📍 Faculty of Petroleum Engineering, Suez University</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
