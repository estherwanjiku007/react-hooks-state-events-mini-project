import React from "react";
import Task from "./Task";
//import { TASKS } from "../data";

;
function TaskList({tasks}) {   
//  console.log(tasks)
  
  return (
    <div className="tasks">      
        <Task myTask={tasks}/>
      <button >x</button>
    </div>
  );
}

export default TaskList;
