import React from "react";
import {useEffect} from "react";
import{useSelector, useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";
function Dashborad() {
  
  const navigate = useNavigate()
 const dispatch = useDispatch()
 const  {user} = useSelector(state=> state.auth)
  const  {goals, isLoading, isError,  message} = useSelector(state=> state.goals)
  
  useEffect(() => {
    checkForUser()
    loadGoal()

    return ()=>{
      dispatch(reset())
    }
  }, [user])

  const loadGoal=async()=>{
   await dispatch(getGoals())
  }
  const checkForUser= ()=>{
    if(!user){
    return  navigate('/login')
    }
  }
 
  if(isLoading){
    return <Spinner />
  }
  return <>
  <section className="heading">
    <h1>
      Welcome {user && user.name}
    </h1>
    <p>Goals Dashboard</p>
  </section>
  <GoalForm/>
  <section className="content">
    {goals.length > 0? (<div className="goals">
      {goals.map((goal)=>( <GoalItem key={goal._id} goal={goal}/>
        
       
       
        
      )) }
      </div>) : (<><h3>You havent set any goals</h3></>)}
  </section>
  </>;
}

export default Dashborad;
