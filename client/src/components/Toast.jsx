"use client"

import { motion } from "framer-motion"
import { CheckCircle, AlertCircle } from "lucide-react"

const Toast = ({ message, type = "success" }) => {
  const isSuccess = type === "success"

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50 flex items-center ${
        isSuccess ? "bg-green-500" : "bg-red-500"
      } text-white`}
    >
      {isSuccess ? <CheckCircle className="mr-2" size={20} /> : <AlertCircle className="mr-2" size={20} />}
      <span>{message}</span>
    </motion.div>
  )
}

export default Toast
