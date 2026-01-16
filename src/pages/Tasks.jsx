import { useEffect, useState } from "react"
import TaskCard from "../components/TaskCard";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const tasksPerPage = 20;
  const totalTasks = 200;
  const totalPages = (totalTasks / tasksPerPage);

  useEffect(() => {
    setLoading(true);
    const startIndex = (currentPage - 1) * tasksPerPage;
    
    fetch(`https://jsonplaceholder.typicode.com/todos?_start=${startIndex}&_limit=${tasksPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#94b3f7] dark:bg-[#0c1434] py-10">
      <h1 className="text-2xl max-w-7xl mx-auto rounded-md font-bold  text-center bg-sky-600 dark:bg-gray-700 p-5 text-white">
        ALL TASKS
      </h1>

      {loading ? (
        <div className="flex justify-center items-center my-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-4 md:grid-cols-2 my-10 gap-8 px-10 lg:px-0">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}

      <div className="flex justify-center  items-center gap-8">
        <button 
          disabled={currentPage === 1 || loading}
          onClick={handlePrevious}
          className="rounded-md border border-slate-300 dark:border-gray-600 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 dark:text-gray-300 hover:text-white hover:bg-slate-800 dark:hover:bg-gray-700 hover:border-slate-800 dark:hover:border-gray-700 focus:text-white focus:bg-slate-800 dark:focus:bg-gray-700 focus:border-slate-800 dark:focus:border-gray-700 active:border-slate-800 dark:active:border-gray-700 active:text-white active:bg-slate-800 dark:active:bg-gray-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
        </button>

       <p className="text-gray-900 dark:text-gray-300 font-semibold text-base bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">
          Page <strong className="text-gray-900 dark:text-white">{currentPage}</strong> of 
          <strong className="text-gray-900 dark:text-white ml-1.5">{totalPages}</strong>
       </p>

        <button 
          disabled={currentPage === totalPages || loading}
          onClick={handleNext}
          className="rounded-md border border-slate-300 dark:border-gray-600 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 dark:text-gray-300 hover:text-white hover:bg-slate-800 dark:hover:bg-gray-700 hover:border-slate-800 dark:hover:border-gray-700 focus:text-white focus:bg-slate-800 dark:focus:bg-gray-700 focus:border-slate-800 dark:focus:border-gray-700 active:border-slate-800 dark:active:border-gray-700 active:text-white active:bg-slate-800 dark:active:bg-gray-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Tasks