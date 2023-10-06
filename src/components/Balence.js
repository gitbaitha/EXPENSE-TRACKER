import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {numberWithCommas} from '../comma'

const Balence = () => {
  const {transactions}=useContext(GlobalContext);
  let amount =0;
  transactions.map((transaction)=>{
    // console.log(transaction)
    amount+=transaction.amount;
  })
  // console.log(amount)
  return (
    <>
     <h4>Your Balance</h4>
      <h1>{amount<0?"-":"+"}${numberWithCommas(Math.abs(amount).toFixed(2))}</h1> 
    </>
  )
}

export default Balence
