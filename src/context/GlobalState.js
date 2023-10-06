import React, { createContext, useEffect, useReducer } from "react";
import axios from 'axios';
import AppReducer from './AppReducer'
//Initail State
const initialState = {
    transactions: [],
    loading: false,
    error: null,
    user: null,
};

//craeting context
export const GlobalContext = createContext(initialState);


//Provider Component
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Action
    async function deleteTransaction(obj){
        
        try{
            dispatch({
                type: "DELETE_TRANSACTION",
                payload: obj.TransactionId
            });
            await axios.post(`http://127.0.0.1/deleteTransaction`,obj);
            // await axios.delete(`https://expencecp.onrender.com/api/v1/transactions//${id}`);
            // console.log(response);
        }catch(e){
            console.log(e)
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: e.response.data.error
            });
            
        }
        
    }
    
    
        async function forceLogIn(){
            const token=await localStorage.getItem('token');
            if(token&&token!==null){
                const response = await axios.post('http://127.0.0.1/getSession',{token});
                if(response.data.success===true){
                    dispatch({
                        type:"LOGING_IN",
                        payload:response.data
                    })
                }
            }
            // console.log(sessionId);
            // console.log(response);
            // console.log(response,"hi")
        }
        useEffect(()=>{
            // console.log("Hi");
            forceLogIn();
        },[]);






    async function addTransaction(user,newTransaction){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const response= await axios.post('http://127.0.0.1/addTransaction',{user,newTransaction},config);
            // const response= await axios.post('https://expencecp.onrender.com/api/v1/transactions/',transaction,config);
            // console.log(response)
            dispatch({
                type:"ADD_TRANSACTION",
                payload:response.data.transactions
            })
        }catch(e){
            console.log(e)
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: e.response.data.error
            });
        }
    };
    
    async function LogMeIn({username, password,setusername,setpassword}){
        state.loading = true;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const response= await axios.post('http://127.0.0.1/login',{username,password},config);
            // const response= await axios.post('https://expencecp.onrender.com/api/v1/transactions/',transaction,config);
            // console.log(response.data);
            await dispatch({
                type:"LOGING_IN",
                payload:response.data
            })
            localStorage.setItem('token',response.data.token);
            // console.log(state.user);
        }catch(e){
            console.log(e)
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: e.response.data.error
            });
        }
    }
   


    async function RegisterMe(obj){
        state.loading = true;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const response= await axios.post('http://127.0.0.1/register',obj,config);
            // const response= await axios.post('https://expencecp.onrender.com/api/v1/transactions/',transaction,config);
            // console.log(response.data);
            dispatch({
                type:"LOGING_IN",
                payload:response.data
            })
            localStorage.setItem('token',response.data.token);
        }catch(e){
            console.log(e)
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: e.response.data.error
            });
        }
    }


    async function LogMeOut(){
        state.loading = true;
        try{
            dispatch({
                type:"LOGING_OUT",
                payload:null
            })
            localStorage.removeItem('token');
        }catch(e){
            console.log(e)
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: e.response.data.error
            });
        }
    }

    return(<GlobalContext.Provider 
        value={{
                transactions:state.transactions,
                deleteTransaction,
                addTransaction,
                loading:state.loading,
                error:state.error,
                user:state.user,
                LogMeIn,
                LogMeOut,
                RegisterMe,
            }}>
            {children}
        </GlobalContext.Provider>)
}