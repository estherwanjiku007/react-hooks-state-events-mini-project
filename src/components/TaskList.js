import React from "react";
import Task from "./Task";
//import { TASKS } from "../data";

;
function TaskList({tasks}) {   
  console.log(tasks)
  
  return (
    <div className="tasks">      
        {tasks.map((task)=>(
          <Task myTask={task.text} category={task.category}/>
        ))}
      <button >x</button>
    </div>
  );
}

export default TaskList;
