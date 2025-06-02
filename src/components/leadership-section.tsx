import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Trophy, Lightbulb, Target } from "lucide-react"

export default function LeadershipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      title: "Graphic Team Coordinator",
      organization: "ENCARTA-Tech Fest, MBM",
      period: "Feb 2024 – Mar 2024",
      description: "Led design strategy and coordinated creative efforts for a major tech festival with 500+ attendees",
      achievements: [
        "Managed a team of 5 designers",
        "Created cohesive visual identity for the event",
        "Delivered all materials on time and within budget",
        "Received positive feedback from 95% of attendees",
      ],
      icon: Users,
      color: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
    },
    {
      title: "Team Lead",
      organization: "Smart India Hackathon 2024",
      period: "Sep 2024",
      description: "Led a cross-functional team to ideate and pitch an innovative logistics optimization system",
      achievements: [
        "Coordinated team of 6 developers and designers",
        "Developed comprehensive solution architecture",
        "Presented to panel of industry experts",
        "Advanced to regional finals",
      ],
      icon: Trophy,
      color: "from-purple-400 to-pink-400",
      bgGradient: "from-purple-900/20 to-pink-900/20",
    },
  ]

  const leadershipQualities = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Ability to see the big picture and align team efforts with long-term goals",
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Creating inclusive environments where every team member can contribute their best",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driver",
      description: "Encouraging creative thinking and fostering a culture of continuous improvement",
    },
  ]

  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Leadership Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building teams, driving innovation, and creating impact through collaborative leadership
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="group"
            >
              <div
                className={`bg-gradient-to-br ${experience.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02]`}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${experience.color} mr-6`}>
                        <experience.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                        <p className="text-gray-400 text-lg">{experience.organization}</p>
                        <span className="text-sm text-gray-500">{experience.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">{experience.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.3 + achievementIndex * 0.1 }}
                          className="flex items-start p-3 bg-gray-900/50 rounded-lg border border-gray-800"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mr-3 mt-2 flex-shrink-0`}
                          />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white text-center">Leadership Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipQualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                className="text-center group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-105">
                  <div className="mb-4">
                    <quality.icon className="h-12 w-12 text-blue-400 group-hover:text-purple-400 transition-colors duration-300 mx-auto" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white">{quality.title}</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {quality.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
