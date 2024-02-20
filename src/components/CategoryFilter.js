import React,{useState} from "react";
//import { CATEGORIES } from "../data";
import {TASKS} from "../data"
//import App  from "./App";
function CategoryFilter({categories}) {
  const [isClicked,setIsClicked]=useState(false)
  const [mycategory,setMyCat]=useState("selected")
  const [filterBy,setFilterBy]=useState("all")
  function isOnClicked(){
    setIsClicked((isClicked)=>!isClicked)
  }
  if(isClicked){
    const theCat="selected"
    setMyCat(theCat)
  }
  else{
    const myCat=""
    setMyCat(myCat)
  }
  const filteredItems=TASKS.filter((task)=>{
  if(filterBy==="all"){
    return true
  }
  else{
    return task.category=filterBy
  }}
  )
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      <span>{categories}
    <button key={categories} className={mycategory} onClick={isOnClicked(!isClicked)}>{categories}</button>
    </span>
    {filteredItems.map((item)=>
    <ul key={item}>{ item}</ul>
    )}
      
    </div>
  );
}

export default CategoryFilter;
