"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg transform rotate-3"></div>
          <motion.img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEM7peK6t__OA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728502895928?e=1753920000&v=beta&t=ow4L80PrqHuTzMboHg7VlUvHOhuFISNJOKtnvEIeUgw"
            alt="My Photo"
            width="500"
            height="500"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto relative z-10"
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3
            className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            Get to know me?
          </motion.h3>

          <motion.p
            className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            I am a Full Stack Web Developer and MERN who builds websites using both frontend and backend tools. On the frontend, I work with React, Tailwind CSS, HTML, CSS, and JavaScript to create clean and responsive designs. On the backend, I use Node.js, Express.js, and databases like MongoDB, PostgreSQL, and MySQL. I also use Redis for caching. For hosting and deployment, I work with platforms like AWS, Vercel, and Render. I focus on building fast, user-friendly, and reliable web applications.
          </motion.p>

          <motion.p
            className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
          >
            I graduated in Electronics and Communication, but my deep interest in coding and web development led me to become a Full Stack Web Developer. I enjoy building modern websites and web apps using technologies like React, Node.js, and PostgreSQL. I’ve learned both frontend and backend skills through hands-on projects and platforms like LeetCode. Now, I’m confident in creating smooth, responsive, and user-friendly websites, and I’m always eager to learn more and take on new challenges.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Education</h4>
              <p className="text-gray-700 dark:text-gray-300">Graduation in ECE</p>
              <p className="text-gray-600 dark:text-gray-400">IES College of Technology, Bhopal
              </p>
              <p className="text-gray-600 dark:text-gray-400">2019-2023
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h4>
              <p className="text-gray-700 dark:text-gray-300">1 Years in Full Stack Web Development</p>
              <p className="text-gray-600 dark:text-gray-400">Specialized in MERN Stack</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
