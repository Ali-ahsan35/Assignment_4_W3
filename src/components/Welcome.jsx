import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to TaskManager
        </h1>
        <p className="text-xl mb-8 opacity-80">
          Organize your tasks efficiently and stay productive. 
          Manage your daily todos with ease and track your progress.
        </p>
        <Link 
          to="/alltasks"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
        >
          View All Tasks
        </Link>
      </div>
    </div>
  )
}

export default Welcome