import { Link } from 'react-router-dom'
import logo from '../assets/task-list-l.svg'
import { useTheme } from '../hooks/useTheme'

const Navbar = () => {
  const { toggleTheme } = useTheme()

  return (
    <nav className="bg-linear-to-r from-blue-600 to-blue-700 dark:from-gray-900 dark:to-gray-800 px-8 py-4 shadow-lg border-b border-blue-500 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="logo" 
            className="h-11 w-11 transition-transform group-hover:scale-110" 
          />
          <div className="leading-tight">
            <h1 className="text-2xl font-bold text-white dark:text-gray-100 tracking-tight">
              Task Manager
            </h1>
            <p className="text-xs tracking-widest text-blue-100 dark:text-gray-300 uppercase">
              Stay On Track
            </p>
          </div>
        </Link>

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4">
          <Link
            to="/alltasks"
            className="flex items-center gap-2 rounded-lg bg-white text-blue-600 px-6 py-2.5
            font-semibold hover:bg-blue-50 shadow-md hover:shadow-lg
            dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600
            focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
            focus:ring-offset-blue-600 dark:focus:ring-offset-gray-900
            transition-all duration-200 transform hover:scale-105"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
              />
            </svg>
            Tasks
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg bg-blue-500 dark:bg-gray-700 text-white
            hover:bg-blue-400 dark:hover:bg-gray-600 shadow-md hover:shadow-lg
            focus:outline-none transition-all duration-200 transform hover:scale-105"
            aria-label="Toggle theme"
          >
            {/* Sun Icon for Light Mode */}
            <svg 
              className="w-5 h-5 hidden dark:block" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
              />
            </svg>
            {/* Moon Icon for Dark Mode */}
            <svg 
              className="w-5 h-5 block dark:hidden" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
              />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar