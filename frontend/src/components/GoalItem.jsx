import React from 'react'
import { FaTrashRestore } from 'react-icons/fa'
import{useDispatch} from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
 

function GoalItem({goal, button}) {
const dispatch = useDispatch()
const removeGoal =()=>{
  console.log("this is id", )
 dispatch(deleteGoal(goal._id))
}
  return (
    <div className="goal" style={{background: "#8080802b",
    borderRadius: "5px", paddingBottom:"6px",marginBottom:"6px"}}>
        <div>
            {new Date(goal.createdAt).toLocaleString('en-US')}   
        </div>
        <h2>{goal.text}</h2>
        <button  style={{position:"relative",top:" -50px",left: "146px"}}className="close" onClick={removeGoal}><FaTrashRestore/></button>
    </div>
    
  )
}

export default GoalItem