import React,{useState} from "react";
//import App from "./App";
import { TASKS } from "../data";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [formText,setFormText]=useState({text:""})
  const [formCategory,setFormCategory]=useState({category:""})
  const [submittedData,setSubmittedData]=useState([])
  function handleChange(event){
    setFormText(event.target.value)
  }
  //function handleChange1(event){
   // setFormCategory(event.target.value)
 // }
  
    const formData=[{
      text:formText,
      category:formCategory
    }]
  
   const allData=[...formData,submittedData]
   setSubmittedData(allData)
   setFormText("")
   setFormCategory("")
  
   const  allSubmissions=submittedData.map((index,data)=>{
    return(
      <div key={index}>{data.text} </div>
    )
   })
  
 /* const [formData2,setFormData2]=useState()
    function onTaskFormSubmit({Task}){
      setFormData2(Task)
     (<li id={TASKS.length}>{TASKS}.filter((Task,id){
      TASKS.text=Task
     <Task ? id===Task.id :"" />
})
</li>  )
}*/
  function tasksCat(){
    <option>{TASKS.map(()=>{
     return (
        <TASKS.category/>        
      )
    })}
  </option>}
  return (
  <div>
    <form className="new-task-form" onSubmit={()=>onTaskFormSubmit(formText)} >
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={formText}/>
      </label>
      <label>
        Category
        <select name="category" onChange={tasksCat}>
          {/* render <option> elements for each category here */}
          <option>{categories}</option>
        </select>
      </label>
      <input type="submit" onClick={handleChange}  value={formData.AddTask} />
    </form>
    <h3>{allSubmissions}</h3>
  </div>  
  );
}

export default NewTaskForm;
