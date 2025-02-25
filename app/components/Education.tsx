"use client"

import { GraduationCap, Calendar, Award, ExternalLink } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      degree: "Coursera",
      institution: "Capaciti",
      period: "2024-Current",
      achievements: [
        "Obtained Certificates",
        "Database Management  and Artificial Intelligence and DevOps",
        "Completed project Using AI 'Wipro Website and Built AI Chatbot'",
      ],
    },
    {
      degree: "Diploma In ICT In Application Development",
      institution: "Walter Sisulu University",
      period: "2020-2022",
      achievements: [
        "Graduated with Diploma",
        "Specialized in Development Software, Technical Programming, Information Systems and Computer Architecture",
        "Completed project 'Bra Joe's Spaza Shop web application and Hotel Management System'",
      ],
    },
    {
      degree: "Bachelor",
      institution: "Ntafufu S.S.S",
      period: "2016-2018",
      achievements: [
        "Passed Matric with a Bachelor pass",
        "Specialized in IsiXhosa, English, Life Orientation, Maths, Life Sciences, Physical Sciences and Geography",
      ],
    },
  ]

  const certificates = [
    {
      name: "Coursera - Database Management",
      issuer: "Capaciti",
      date: "2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/database-management-m9PSTJkWmqQdYM3cMoGNKhxUE9OXol.png",
      link: "https://www.credly.com/badges/1b9ba4f8-c16e-4e89-99e0-8ba0ca858cdd/public_url",
    },
    {
      name: "Coursera - Artificial Intelligence",
      issuer: "Capaciti",
      date: "2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artificial-intelligence.18-AUNIr9GjoTi2uv87uOBTvy7v5rSyj3.png",
      link: "https://www.credly.com/badges/4b87d9a2-4127-4cc8-aa09-6e40cf29b5c2/public_url",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "AWS",
      date: "2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aws-skills-center-cloud-practitioner-foundations-8I8zKJKGCClCGFlc3vRACOCUkMnPgl.png",
      link: "https://coursera.org/share/f4b398d5d00798561c04012a4e6e2525",
    },
    {
      name: "IBM DevOps Essentials",
      issuer: "IBM & Coursera",
      date: "2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/devops-essentials.2-CrseVDx2PCL5WL8hxfUFTWCJYMmODP.png",
      link: "https://www.credly.com/badges/d68651ab-e905-466f-a16c-9ae1e526bce1/public_url",
    },
  ]

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Education" />
        <div className="max-w-3xl mx-auto space-y-12 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
                <h4 className="text-lg font-medium mb-2 dark:text-gray-200 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSectionHeader title="Certificates" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.name}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">{cert.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                View Certificate <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

