import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [allTasks,setTasks]=useState(TASKS)
  const onTaskFormSubmit=(value)=>{
       setTasks=[...allTasks,value]
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} myData={allTasks} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={TASKS} />
    </div>
  );
}

export default App;
