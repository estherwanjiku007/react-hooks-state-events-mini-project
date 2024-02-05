import React,{useState} from "react";
import {TASKS} from "../data"
function Task({text,category}) {
  /*function category1(){
    TASKS.map(()=>{
      (<li>
        {TASKS.category}
      </li>)
    })
  }
  function text1(){
    {TASKS.map(()=>{
      (
        <li>{TASKS.text}</li>
      )
    })}    
  }*/
  const [allItems,setAllItems]=useState("ALL")
  function handleClick1(event){
    setAllItems(event.target.value)
  }
  const items2Display=TASKS.filter((task)=>{
    if(allItems==="ALL")return true
    return task.text===allItems
  })
  const [allItems2,setAllItems2]=useState("All")
  function handleClick2(event){
    setAllItems2(event.target.value)
      }
      const items2Display2=TASKS.filter((task)=>{
        if(allItems2==="All") return true
        return task.category===allItems2
      })
  const [Button,setButton]=useState(false)
  const handleDelete=(()=>{
     setButton(()=>{!Button(
    TASKS.filter((task)=>{
      <li key={TASKS.text}>{TASKS.text ? task.text===TASKS.text:""}</li>
    
    })
   ) })})
  return (
    <div className="task">
      <div className="label" onClick={handleClick2}>{category} 
        </div>
      <div className="text" onClick={handleClick1}>
        {text}        
        
      </div>
      <button  onClick={handleDelete}  className="delete">X</button>
    </div>
  );
}



export default Task;
