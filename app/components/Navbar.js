'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, CloudIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gradient-to-r from-indigo-900/90 via-purple-800/90 to-pink-900/90 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 sm:gap-4">
              <CloudIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
              <span className="text-white dark:text-gray-100 text-lg sm:text-xl font-bold">Weather App</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 sm:gap-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-1.5 sm:p-2 rounded-lg bg-white/10 dark:bg-gray-800/50 hover:bg-white/20"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-1.5 sm:p-2 rounded-lg bg-white/10 dark:bg-gray-800/50 hover:bg-white/20"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              ) : (
                <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-white/80 dark:text-gray-300 hover:text-white text-base sm:text-lg">
              Home
            </Link>
            <Link href="/about" className="text-white/80 dark:text-gray-300 hover:text-white text-base sm:text-lg">
              About
            </Link>
            <Link href="/contact" className="text-white/80 dark:text-gray-300 hover:text-white text-base sm:text-lg">
              Contact
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/10 dark:bg-gray-800/50 hover:bg-white/20"
            >
              {isDarkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-indigo-900/95 via-purple-800/95 to-pink-900/95 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-900/95 backdrop-blur-sm">
            <div className="px-4 py-2 space-y-1 sm:space-y-2">
              <Link
                href="/"
                className="block px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 text-base sm:text-lg"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 text-base sm:text-lg"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 text-base sm:text-lg"

                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 