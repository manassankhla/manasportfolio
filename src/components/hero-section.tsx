import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Crafting digital products that blend logic, empathy, and innovation."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Manas Sankhla
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 space-y-2"
          >
            <p>Full-stack Developer | MCA Student @ MBM University, Jodhpur</p>
            <div className="h-8 flex items-center justify-center">
              <span className="text-blue-400">{text}</span>
              <span className="animate-pulse">|</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="/Manas_Sankhla_Resume.pdf" download>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            </a>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://github.com/manassankhla"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="https://www.linkedin.com/in/manassankhla/"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="mailto:manassankhla991@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
