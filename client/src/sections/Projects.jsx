"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GitlabIcon as GitHub, ExternalLink } from "lucide-react"

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Expense-tracker",
      description:
        "I built a full-featured Expense Tracker platform using MongoDB to store data. It helps users easily manage and track their spending with clear, interactive charts for better money management. ",
      image: "/expense.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Framer Motion,Context-API"],
      github: "https://github.com/Shahnawaz1967/expense-tracker.git",
      demo: "https://expense-tracker.shahnawaz.tech/",
    },
    {
      id: 2,
      title: "Blog-app",
      description:
        "I built a Blog platform using the MERN stack. In this app, users can create and edit their own blog posts. Only logged-in users can make changes, ensuring the content is secure. The app uses authentication to keep user data safe and provide a smooth experience.",
      image: "/Blog-app.png",
      technologies: ["React", "Context-API", "Node.js", "Framer Motion", "MongoDB"],
      github: "https://github.com/Shahnawaz1967/blog-app.git",
      demo: "https://blog-app.shahnawaz.tech/",
    },
    {
      id: 3,
      title: "Task Management",
      description: "I developed a Task Management app using the MERN stack (MongoDB, Express, React, Node.js). Users can create, update, and delete tasks. It supports login authentication, so only authorized users can manage their tasks. The app helps users stay organized and track their progress efficiently.",
      image: "/Task-manage.png",
      technologies: ["React", "Tailwind CSS", "Nodejs", "Expressjs", "MongoDB"],
      github: "https://github.com/Shahnawaz1967/task-management.git",
      demo: "task-management.shahnawaz.tech/",
    },
     {
      id: 4,
      title: "Portfolio With React",
      description: "A personal portfolio website built using React for structure, Tailwind CSS for styling, Framer Motion for smooth animations, and Nodemailer to handle contact form submissions via email.",
      image: "/personal-portfolio1.png",
      technologies: ["React", "Node.js", "Express", "Nodemailer", "Framer Motion"],
      github: "https://github.com/Shahnawaz1967/portfolio-react.git",
      demo: "https://portfolio.shahnawaz.tech/",
    },
    {
      id: 5,
      title: "Chat-app",
      description: "I built a real-time Chat Application using the MERN stack .and integrated Socket.IO for fast and seamless bidirectional communication between users. Authenticated users can send and receive messages instantly. It also includes typing indicators, online/offline status, and message read receipts, enhancing the overall user experience.",
      image: "/chat-app.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com/Shahnawaz1967/chat-app.git",
      demo: "https://chat-app-xsld.onrender.com/",
    },
    {
      id: 6,
      title: "Portfolio with Nextjs",
      description: "This is my personal portfolio website built using Next.js. It showcases my skills, projects, and experience in web development. The site is fully responsive and has smooth scroll animations for a better user experience. I also added a contact form where visitors can send me messages, and those messages are safely stored in a MongoDB database. This project helped me learn how to connect frontend and backend, and how to handle form data in a real-world application.",
      image: "/next-portfolio.png",
      technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Framer Motion"],
      github: "https://github.com/Shahnawaz1967/nextjs-portfolio1.git",
      demo: "https://www.shahnawaz.tech/",
    },
    {
      id: 7,
      title: "netflix-clone",
      description: "This application is created using the MERN stack, which consists of MongoDB, Express.js, React, and Node.js. The purpose of this project is to give users an experience similar to using Netflix, where they can browse, search, and watch a variety of movies and TV shows.",
         image: "/netflix-clone.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TMDB API"],
      github: "https://github.com/Shahnawaz1967/netflix-clone.git",
      demo: "https://netflix-clone-1-gquj.onrender.com/",
    },
    
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
        <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Projects Which I Have worked on recently
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden h-48 ">
              <motion.img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-[90%] h-[90%] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex justify-between">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GitHub size={18} className="mr-1" />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} className="mr-1" />
                  <span>Live Demo</span>
                </motion.a>
                <motion.button
                  onClick={() => setActiveProject(project)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={activeProject.image || "/placeholder.svg"}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-75 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{activeProject.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{activeProject.description}</p>

                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-6">
                  <motion.a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg inline-flex items-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GitHub size={18} className="mr-2" />
                    View Code
                  </motion.a>
                  <motion.a
                    href={activeProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-flex items-center hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
