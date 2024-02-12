import React from "react";
//import {TASKS} from "../data"
function Task({myTask,category}) {
  console.log(myTask,category) 
  
  return (
    <div className="task">
      <div className="label" >{category} 
        </div>
      <div className="text" >
        {myTask}        
        
      </div>
      <button   className="delete">X</button>
    </div>
  );
}



export default Task;
