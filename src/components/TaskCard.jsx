import { Link } from 'react-router-dom'

const TaskCard = ({ task }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl 
      transition-all duration-300 overflow-hidden border-3 border-transparent
      ${task.completed 
        ? 'hover:border-green-500 dark:hover:border-green-500' 
        : 'hover:border-yellow-500 dark:hover:border-yellow-500'
      }`}
    >
      <div className="p-5">
        
        {/* Header: ID and Status Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
            Task #{task.id}
          </span>
          
          {task.completed ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold 
              bg-green-100 text-green-800 dark:bg-green-600 dark:text-white">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Completed
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold 
              bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-white">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Pending
            </span>
          )}
        </div>

        {/* Task Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 capitalize">
          {task.title}
        </h3>

        {/* Footer: User ID and View Details Button */}
        <div className="flex items-center justify-end pt-3 border-t border-gray-200 dark:border-gray-600">
          

          <Link
            to={`/tasks/${task.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 
              dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 
              transition-colors group"
          >
            View Details
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default TaskCard