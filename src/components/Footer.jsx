const Footer = () => {
  return (
    <footer className="bg-blue-600 dark:bg-gray-900 text-white dark:text-gray-300 px-8 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        
        {/* Left side: text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
        </p>

        {/* Right side: small tagline */}
        <p className="text-sm text-blue-100 dark:text-gray-400 tracking-wide uppercase">
          Stay on Track
        </p>

      </div>
    </footer>
  )
}

export default Footer
