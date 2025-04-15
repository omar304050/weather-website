'use client'
import { CloudIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900/90 via-purple-800/90 to-pink-900/90 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="bg-white/20 dark:bg-gray-800/50 p-2 rounded-lg">
              <CloudIcon className="h-6 w-6 text-white dark:text-gray-200 transition-colors duration-300" />
            </div>
            <p className="text-white dark:text-gray-200 font-semibold transition-colors duration-300">
              Weather App
            </p>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-white dark:text-gray-200 transition-colors duration-300">
              © {new Date().getFullYear()} Weather App. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-white dark:text-gray-200 hover:text-white/80 dark:hover:text-gray-300 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-white dark:text-gray-200 hover:text-white/80 dark:hover:text-gray-300 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-white dark:text-gray-200 hover:text-white/80 dark:hover:text-gray-300 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 