import React from "react";
//import {TASKS} from "../data"
function Task({myTask}) {
 //console.log(myTask) 
  const deleteTask=(aText)=>{
    myTask.text.filter((task)=>aText!==task)
  }
  return (
    <div>
    {myTask.map((task)=>(
    <div className="task" key={task.text}>         
      <div className="label" >{task.category} </div>
      <div className="text" >{task.text}  </div>
      <button   className="delete" onClick={()=>deleteTask(task.text)}>X</button>
      
    </div>
    ))}
    </div>
  );
}



export default Task;
