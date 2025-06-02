import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import EducationSection from "@/components/education-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import LeadershipSection from "@/components/leadership-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />

      <motion.div style={{ opacity }} className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0  bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      </motion.div>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
    </div>
  )
}
