import React from "react";
import Task from "./Task";
import { TASKS } from "../data";

;
function TaskList({tasks,selectedCategory}) {   
  console.log(tasks)
  const allFiters=selectedCategory==="ALL" ? tasks :tasks.filter((task)=>{
    return (task===selectedCategory? tasks : "ALL")
  })
  return (
    <div className="tasks">      
        <li key={TASKS.text}>
          {tasks.map(()=>{
            return<Task key={tasks.text} text={tasks.text} category={tasks.category}/>
          })}
        </li>
      <button onClick={allFiters}>x</button>
    </div>
  );
}

export default TaskList;
