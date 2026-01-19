import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { useDebounce } from "../hooks/useDebounce";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const tasksPerPage = 20;
  const totalTasks = 200;
  const totalPages = totalTasks / tasksPerPage;

  useEffect(() => {
    setLoading(true);
    const startIndex = (currentPage - 1) * tasksPerPage;

    fetch(
      `https://jsonplaceholder.typicode.com/todos?_start=${startIndex}&_limit=${tasksPerPage}`
    )
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

  useEffect(() => {
    if (debouncedSearchQuery.trim() === "") {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) =>
        task.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
      setFilteredTasks(filtered);
    }
  }, [debouncedSearchQuery, tasks]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleToggleStatus = (taskId, newStatus) => {
    // the tasks array
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: newStatus } : task
      )
    );
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#94b3f7] dark:bg-[#0c1434] py-10">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mx-10 max-w-7xl md:mx-auto rounded-md  bg-sky-600 dark:bg-gray-700 p-5 text-white">
        <h1 className="text-2xl font-bold ">ALL TASKS</h1>
        <div className="relative max-w-sm">
          <input
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
            type="search"
            placeholder="Search your task"
          />
          <div
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
              />
            </svg>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center my-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
        </div>
      ) : filteredTasks.length === 0 ? (
        // Task not found
        <div className="flex flex-col min-h-[45.8vh] items-center justify-center my-20 px-4">
          <svg
            className="w-24 h-24 text-gray-400 dark:text-gray-600 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            No tasks found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            {searchQuery.trim() !== ""
              ? `No results for "${searchQuery}". Try a different search term.`
              : "No tasks available at the moment."}
          </p>
        </div>
      ) : (
        //tasks found
        <div className="grid auto-rows-min min-h-[54.6vh] max-w-7xl mx-auto grid-cols-1 lg:grid-cols-4 md:grid-cols-2 my-10 gap-8 px-10 lg:px-0">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleStatus={handleToggleStatus}
            />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <p className="text-gray-900 dark:text-gray-300 font-semibold text-base bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">
          Page{" "}
          <strong className="text-gray-900 dark:text-white">
            {currentPage}
          </strong>{" "}
          of
          <strong className="text-gray-900 dark:text-white ml-1.5">
            {totalPages}
          </strong>
        </p>

        <button
          disabled={currentPage === totalPages || loading}
          onClick={handleNext}
          className="rounded-md border border-slate-300 dark:border-gray-600 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 dark:text-gray-300 hover:text-white hover:bg-slate-800 dark:hover:bg-gray-700 hover:border-slate-800 dark:hover:border-gray-700 focus:text-white focus:bg-slate-800 dark:focus:bg-gray-700 focus:border-slate-800 dark:focus:border-gray-700 active:border-slate-800 dark:active:border-gray-700 active:text-white active:bg-slate-800 dark:active:bg-gray-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Tasks;
