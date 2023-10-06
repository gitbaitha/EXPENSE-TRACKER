import React, { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Register = () => {
  const {user,RegisterMe}=useContext(GlobalContext);
  const navigate=useNavigate();
  const [username,setUsername] =useState("");
  const [password,setPassword] =useState("");
  const [email,setEmail] =useState("");
  useEffect(()=>{
    if(user!==null){
      navigate('/transactions');
    }
  },[])
  return (
    <div className="container">
      <h1>Register</h1>
      <form
        action="/register"
        method="post"
        className="needs-validation"
        noValidate
      >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            onChange={(e)=>setUsername(e.target.value)}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={(e)=>setEmail(e.target.value)}
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
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <button className="btn btn-success"  onClick={async(e)=>{
          e.preventDefault();
          await RegisterMe({username,password,email});
          setEmail("");
          setUsername("");
          setPassword("");
          navigate('/transactions')
        }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
