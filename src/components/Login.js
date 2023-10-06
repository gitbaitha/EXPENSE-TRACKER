import React,{useContext,useEffect,useState} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const {user,LogMeIn,getUser}=useContext(GlobalContext);
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  useEffect(()=>{
    if(user!==null){
      navigate('/transactions');
    }
  },[user])
  return (
    <div className="container">
      <h1>Login</h1>
      <form  className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <button className="btn btn-success" onClick={
          async(e)=>{
            e.preventDefault();
            await LogMeIn({username,password,setusername,setpassword});
            setusername("");
            setpassword("");
            navigate('/transactions');
          }
        }>Login</button>
      </form>
    </div>
  );
};

export default Login;
