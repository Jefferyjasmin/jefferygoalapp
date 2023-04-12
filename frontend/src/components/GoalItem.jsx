import React from 'react'
import "./Goalitem.css"
import { Link, useNavigate } from "react-router-dom";
import{useDispatch} from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
 
 

function GoalItem({goal}) {
const dispatch = useDispatch()
const navigate = useNavigate();

const removeGoal =()=>{
 dispatch(deleteGoal(goal._id))
};


const editgoal =(n)=>{
 navigate(`/updategoal/`+n)
}
  return (
    <div>
      
    <div className="goal_container" style={{background: "#8080802b"}}>

      <div>
        <h2 className='goal_content' >{goal.text}</h2>
      </div>
        <div className="goal_content_overlay">
          <Link to={`/updategoal/${goal._id}`}>Edit</Link>
          <span  className='goal_overlay_span' onClick={()=>editgoal(goal._id)}>Edit</span>
            <span className='goal_overlay_span' onClick={removeGoal}>remove</span>
        </div>
        
    </div>

     

      
    
    </div>
    
  )
}

export default GoalItem