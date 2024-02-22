import React from "react";
import Task from "./Task";
//import { TASKS } from "../data";

;
function TaskList({tasks}) {   
 //console.log(tasks)
  
  return (
    <div className="tasks">      
        <Task myTask={tasks}/>
     
    </div>
  );
}

export default TaskList;
