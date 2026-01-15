import { useEffect, useState } from "react"
import TaskCard from "../components/TaskCard";

const Tasks = () => {

  const [tasks, setTasks] = useState([]);
  // base_url =` https://jsonplaceholder.typicode.com/todos?_start=40&_limit=20`

  useEffect(()=>{
    fetch( `https://jsonplaceholder.typicode.com/todos?_start=40&_limit=20`)
      .then((res)=>res.json())
      .then((data)=>setTasks(data));
  },[])

  return (
    <div>
      <h1 className="text-2xl max-w-7xl mx-auto rounded-md font-bold mt-10 text-center bg-sky-800 p-5 text-white" > ALL TASKS</h1>
      <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-4 md:grid-cols-2 my-10 gap-8 px-10 lg:px-0">
        {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
      <div className="flex justify-center mb-10 items-center gap-8">
          <button disabled className="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
          </button>
 
          <p className="text-slate-600">
            Page <strong className="text-slate-800">1</strong> of&nbsp;<strong className="text-slate-800">10</strong>
          </p>
  
          <button className="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
      </div>
  </div>
  )
}

export default Tasks