import React,{useState} from "react";
import { CATEGORIES } from "../data";
import {TASKS} from "../data"
//import App  from "./App";
function CategoryFilter({categories,selectedCategory,onSelectedCategory}) {
  const [isClicked,setIsClicked]=useState(false)
  function isOnClicked(){
    setIsClicked((isClicked)=>!isClicked)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.filter((category)=>{
        return(
          <li>
             {categories}
            <button id={categories} onClick={()=>(isClicked ? "selected" :"" )}>x</button>
          </li>
        ) ? selectedCategory===category : "ALL"
      })}
    </div>
  );
}

export default CategoryFilter;
