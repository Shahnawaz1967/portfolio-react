"use client"

import { motion } from "framer-motion"

const Skills = () => {
  const frontendSkills = [
    "React",
    "Nextjs",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Redux",
    "Next.js",
    "Bootstrap",
    "Framer Motion",
  ]

  const backendSkills = [
    "Node.js",
    "Express",
  ]

  const databaseSkills = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Firebase",
  ]

  const toolsSkills = [
    "Git",
    "Docker",
    "AWS",
    "Vercel",
    "Netlify",
    "Vite",
    "Jest",
  ]

  const skillCategories = [
    { title: "Frontend", skills: frontendSkills, color: "from-blue-500 to-cyan-500" },
    { title: "Backend", skills: backendSkills, color: "from-green-500 to-emerald-500" },
    { title: "Database", skills: databaseSkills, color: "from-purple-500 to-pink-500" },
    { title: "Tools & DevOps", skills: toolsSkills, color: "from-orange-500 to-red-500" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={item}
            className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div
              className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 flex items-center justify-center`}
            >
              <span className="text-white font-bold text-lg">{category.title.charAt(0)}</span>
            </div>

            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{category.title}</h3>

            <motion.div
              className="flex flex-wrap gap-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  variants={skillItem}
                  className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-600 hover:text-blue-800 dark:hover:text-white transition-colors cursor-default"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    delay: skillIndex * 0.05,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional animated elements */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="font-medium">Committed to continuous learning and adapting to emerging technologies.</span>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills
