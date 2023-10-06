import React,{useContext,useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Transaction from './Transaction';
import {Link, useNavigate} from 'react-router-dom';

const TransactionList = () => {
  const navigate= useNavigate();
  const {user,transactions} = useContext(GlobalContext);
  useEffect(()=>{
    if(user===null){
     navigate('/login');
    }

  },[]);
  return (
    <>
     <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction =>(
          <Transaction key={transaction._id} transaction={transaction}/>
        ))}
      </ul> 
    </>
  )
}

export default TransactionList
