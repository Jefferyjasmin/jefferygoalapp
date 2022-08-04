 
import { toast } from 'react-toastify';
import { FaSignInAlt} from 'react-icons/fa'
import{useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { login ,reset} from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Login() {

const navigate = useNavigate()
 const dispatch = useDispatch()
 const  {user, isLoading, isError, isSuccess, message} = useSelector(state=> state.auth)

  useEffect(() => {
   if(isError){
    toast.error(message)
   }

   if(isSuccess|| user){
    navigate('/')
   }

   dispatch(reset())
  }, [user,isError,isSuccess,message,navigate,dispatch])


  const [formData, setFormData] = useState({
  
    email: "",
    password: "",
 
  });
const { name, email, password, password2 } = formData;
   
  const onChange=(e)=>{
  setFormData((prevState)=>({
    ...prevState,
[e.target.name]: e.target.value
  }))
  }
   const onSubmit=(e)=>{
  
     e.preventDefault();
    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }
  
   if(isLoading){
    return <Spinner/>
  }
  
  
  return (
    <>
    <secction className="heading">
      <h1>
        <FaSignInAlt/> Login
      </h1>
      <p>Login in to your  account</p>
    </secction>
    <section className="form">
      <form onSubmit={onSubmit}>
         
        <div className="form-group"> <input type='text' className='form-control' id='email' name='email' value={email} placeholder="Enter your Email" onChange={onChange}/></div>
        <div className="form-group"> <input type='text' className='form-control' id='password' name='password' value={password} placeholder="Enter your password" onChange={onChange}/></div>
        
       <div className="form-group">
        <button type="submit" className='btn btn-block'>Submit</button>
       </div>
      </form>
    </section>
    </>
  )
}

export default Login