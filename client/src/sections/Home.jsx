import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail, Download } from "lucide-react"

const Home = () => {
  return (
    <div className="container mx-auto px-4 h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <motion.span
            className="text-blue-600 dark:text-blue-400 font-medium text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I am
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mt-2 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            MD Shahnawaz
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Full Stack Web Developer 
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I build user-friendly websites using tools like Next.js, React, Node.js, and Express. I work with databases like PostgreSQL and MongoDB, and I also use Redis and AWS to make websites run better and stay online. I handle both frontend and the behind-the-scenes work backend to create smooth and reliable web apps
          </motion.p>

          <motion.div
            className="flex space-x-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="https://github.com/Shahnawaz1967"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-gray-700 text-white p-3 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors shadow-lg"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitHub size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mdsahnawaz24/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:ashahnawaz010@gmail.com"
              className="bg-red-600 text-white p-3 rounded-full hover:bg-red-500 transition-colors shadow-lg"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <motion.a
              href="/Md_Shahnawaz_FSWD.pdf"
              download
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Light blue background with animated gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-full blur-3xl opacity-60"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Additional animated circles */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 bg-blue-300/20 dark:bg-blue-500/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 bg-purple-300/20 dark:bg-purple-500/20 rounded-full"
              animate={{
                y: [0, 15, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            <motion.img
              src="/formal.jpg"
              alt="Shahnawz image"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
