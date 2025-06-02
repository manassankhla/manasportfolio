import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Heart, Lightbulb, Users } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and robust code that stands the test of time",
    },
    {
      icon: Heart,
      title: "User Empathy",
      description: "Understanding user needs to create meaningful digital experiences",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly exploring new technologies and creative solutions",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong teams and fostering inclusive development environments",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer from Jodhpur, Rajasthan, currently pursuing my MCA at MBM University.
            My journey in technology is driven by a desire to create digital solutions that make a real difference in
            people's lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="mb-4">
                  <value.icon className="h-12 w-12 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-white">Languages & Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {["English", "Hindi"].map((lang) => (
                <span key={lang} className="px-4 py-2 bg-gray-800 rounded-full text-blue-400">
                  {lang}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {["Leadership", "Critical Thinking", "Problem Solving"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-purple-400">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
