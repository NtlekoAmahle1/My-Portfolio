"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, GitBranch, Cpu, FileText } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import Image from "next/image"

const SkillIcon = ({ icon: Icon, color }: { icon: React.ElementType; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

const skills = [
  {
    icon: Code,
    name: "Frontend Development",
    tech: "React.js, HTML&CSS, JAVASCRIPT",
    description:
      "Building responsive and interactive user interfaces with modern React features and JAVASCRIPT for optimal performance.",
    color: "text-blue-500",
  },
  {
    icon: Server,
    name: "Backend Development",
    tech: "Node.js, C#, JAVA",
    description: "Creating robust server-side applications with focus on scalability and clean architecture.",
    color: "text-green-500",
  },
  {
    icon: Database,
    name: "Database Management",
    tech: "MySQL, PostgreSQL,Oracle",
    description: "Designing and implementing efficient database schemas and queries for optimal data management.",
    color: "text-purple-500",
  },
  {
    icon: Layout,
    name: "UI/UX Design",
    tech: "Figma",
    description: "Crafting beautiful and intuitive user interfaces with modern design principles and frameworks.",
    color: "text-pink-500",
  },
  {
    icon: GitBranch,
    name: "Version Control",
    tech: "GitHub",
    description: "Collaborating effectively through GitHub and also storing my projects in it.",
    color: "text-orange-500",
  },
  {
    icon: Cpu,
    name: "Artificial Intelligence",
    tech: "Generative AI, Prompt Engineering",
    description:
      "Designing and implementing advanced AI solutions, with expertise in generative models and crafting effective prompts for optimal AI performance.",
    color: "text-purple-500",
  },
]

const projects = [
  {
    title: "Bra Joe's Fast Food",
    description: "A full-stack restaurant website with online ordering system, menu management, and responsive design.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bar%20Joe.PNG-Gdvk90wwNsJnDWc3OAXIvHHZENeqjH.png",
    link: "https://sites.google.com/view/joe-s-fast-food",
  },
  {
    title: "AI Chatbot",
    description: "An intelligent CAPACITI dashboard with AI-powered chat assistance and program management features.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20Chatbot.PNG-Z8bsOzwWc34IvjerIhqw3IhueUk2G2.png",
    link: "https://capaciti-chatpal.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "A modern weather application with real-time updates, multi-day forecasts, and location-based weather data.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Weather%20App.PNG-wc35MYj9B5ltjX0G0PZwZVEFMk1Vrh.png",
    link: "https://agile-weather.vercel.app/",
  },
  {
    title: "News and Weather Widget",
    description: "A comprehensive dashboard combining news aggregation and weather updates with category filtering.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/news%20and%20weather.PNG-tWwAgvhnJiKB3QIxpohUEccDrS0w6Y.png",
    link: "https://agile-dashboard-ten.vercel.app/",
  },
  {
    title: "Wipro Website",
    description: "A professional corporate website showcasing Wipro's services and technological innovations.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wipro.PNG-1cNKXVC1rdS2bLA8jscCu5lNlruVuU.png",
    link: "https://carmine-bear-nngb13.mystrikingly.com/",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSectionHeader title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative w-full h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <FileText className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

