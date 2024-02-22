import React,{useState} from "react";
//import App from "./App";
import { TASKS } from "../data";

function NewTaskForm({categories,onTaskFormSubmit,myData}) {
  console.log(categories,myData)
  const [formText,setFormText]=useState({text:""})
  const [selectedCategory,setSelectedCategory]=useState("ALL")
  //const [formCategory,setFormCategory]=useState({category:""})
  const [submittedData,setSubmittedData]=useState([])
  function handleChange(event){
    setFormText(event.target.value)
  }
  function  handleCategoryChange(event){
    setSelectedCategory(event.target.value)
  }
  //function handleChange1(event){
   // setFormCategory(event.target.value)
 // }  
    
  
   const allData=[...myData,submittedData]
   setSubmittedData(allData)
   setFormText("")
   //setFormCategory("")
   const handleSubmit=(event)=>{
    event.prevevtDefault()
    onTaskFormSubmit(formText)
  }
  
   const allSubmissions=myData.filter((data)=>{
    if(selectedCategory==="ALL")return true
    return data.category===selectedCategory
   })
  
  return (
  <div>
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text"  value={formText} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" >
          {/* render <option> elements for each category here */}
          <option onChange={handleCategoryChange}>{categories}</option>
        </select>
      </label>
      
    </form>
    {allSubmissions.map((sub)=>(
        <li>{sub.text}</li>
    ))}
  </div>  
  );
}

export default NewTaskForm;
