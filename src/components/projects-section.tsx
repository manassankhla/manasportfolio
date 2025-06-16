import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, TrendingUp, Leaf, BarChart3 } from "lucide-react"


export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "Stockify",
      subtitle: "Stock Marketing Tool",
      period: "Dec 2024 – Feb 2025",
      description:
        "A comprehensive real-time stock monitoring application built with the MERN stack, featuring role-based access control and interactive dashboards for market analysis.",
      impact: "Empowering investors with real-time insights and analytics",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Chart.js"],
      features: [
        "Real-time stock price monitoring",
        "Interactive analytics dashboards",
        "Role-based user access control",
        "Clean, intuitive UI/UX design",
      ],
      icon: TrendingUp,
      color: "from-green-400 to-emerald-400",
      bgGradient: "from-green-900/20 to-emerald-900/20",
      githubLink: "https://github.com/manassankhla/Stockify",
    },
    {
      title: "Menuwave",
      subtitle: "Digital Menu Solution",
      period: "May 2023 – Jun 2023",
      description:
        "An innovative QR-based digital menu system that helps restaurants transition to paperless operations while enhancing customer experience.",
      impact: "Reducing paper waste while improving customer engagement",
      technologies: ["Python", "HTML/CSS", "QR Code API", "Responsive Design"],
      features: [
        "QR code-based menu access",
        "Paperless restaurant operations",
        "Enhanced customer experience",
        "Eco-friendly solution",
      ],
      icon: Leaf,
      color: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      githubLink: "https://github.com/manassankhla/MENUWAVE_PROJECT",
    },
  ]

  const extras = [
    {
      title: "Deloitte Australia Tech Simulation",
      period: "Mar 2025",
      description: "Built a comprehensive business dashboard with advanced analytics and business logic implementation",
      icon: BarChart3,
      color: "from-purple-400 to-pink-400",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solutions that solve real problems and create meaningful impact
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="group"
            >
              <div
                className={`bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02]`}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} mr-4`}>
                        <project.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <p className="text-gray-400">{project.subtitle}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-sm text-gray-500">{project.period}</span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                    <div
                      className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-semibold mb-6`}
                    >
                      💡 {project.impact}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
  href={project.githubLink}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md text-gray-300 bg-blue-500 cursor-pointer hover:bg-blue-600 transition"
>

                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>

                      {/* <Button className={`bg-gradient-to-r ${project.color} text-white hover:bg-sky-500 cursor-pointer hover:text-red-500`}>
                        <ExternalLink className="mr-2 h-4 w-4 "  />
                        Live Demo
                      </Button> */}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.3 + featureIndex * 0.1 }}
                        className="flex items-center p-3 bg-gray-900/50 rounded-lg border border-gray-800"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mr-3`} />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extras Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white text-center">Additional Experience</h3>
          <div className="grid md:grid-cols-1 gap-6">
            {extras.map((extra) => (
              <div
                key={extra.title}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${extra.color} mr-4`}>
                    <extra.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{extra.title}</h4>
                    <span className="text-sm text-gray-500">{extra.period}</span>
                  </div>
                </div>
                <p className="text-gray-300">{extra.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
