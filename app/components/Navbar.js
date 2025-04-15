'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!"theme" in localStorage &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = ""
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <nav className="bg-gradient-to-r from-indigo-900/90 via-purple-800/90 to-pink-900/90 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4 ">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <span className="text-white dark:text-gray-100 text-xl font-bold transition-colors duration-300">Weather App</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors duration-300">
              Contact
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-400 transition-colors duration-300" />
              ) : (
                <MoonIcon className="h-6 w-6 text-white transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 