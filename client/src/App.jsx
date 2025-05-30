"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail, ArrowUp } from "lucide-react"
import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Toast from "./components/Toast"

// Dark Mode Context
const DarkModeContext = createContext()

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider")
  }
  return context
}

function App() {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState("success")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode")
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const displayToast = (message, type = "success") => {
    setToastMessage(message)
    setToastType(type)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <Navbar />

        <main>
          <section id="home" className="min-h-screen">
            <Home />
          </section>

          <section id="about" className="py-20">
            <About />
          </section>

          <section id="skills" className="py-20 bg-white dark:bg-gray-800">
            <Skills />
          </section>

          <section id="projects" className="py-20">
            <Projects />
          </section>

          <section id="contact" className="py-20 bg-white dark:bg-gray-800">
            <Contact displayToast={displayToast} />
          </section>
        </main>

        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <motion.a
                href="https://github.com/Shahnawaz1967"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitHub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mdsahnawaz24/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:learningn295@gmail.com"
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} />
              </motion.a>
            </div>
            <p>© {new Date().getFullYear()} Shahnawaz. All rights reserved.</p>
          </div>
        </footer>

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
              aria-label="Scroll to top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>{showToast && <Toast message={toastMessage} type={toastType} />}</AnimatePresence>
      </div>
    </DarkModeContext.Provider>
  )
}

export default App
