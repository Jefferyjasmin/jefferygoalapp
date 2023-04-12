
import React, { useState , useEffect} from 'react'
import{useDispatch} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'
function GoalForm() {
 const dispatch = useDispatch()


 const [text, setText]= useState('')
 const onSubmit=(e)=>{
    e.preventDefault();

    dispatch(createGoal({text}))
    setText("")
 }
  return (
    <section className='form'>Enter new Goal
    <form  onSubmit={onSubmit}>
        <div className="form-group" style={{flexDirection:"column", alignItems: "start", display:"flex"}}>
            <label htmlFor="text" >Goal</label>
            <input type="text" name='text' id='text' value={text} onChange={(e)=> setText(e.target.value)} />
        </div>
        <div className="form-group">
            <button className="btn btn-block" type="submit"> add goal</button>
        </div>
    </form>
    </section>
  )
}

export default GoalForm