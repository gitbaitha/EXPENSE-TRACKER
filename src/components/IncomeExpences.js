import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {numberWithCommas} from '../comma'


const IncomeExpences = () => {
  const {transactions}=useContext(GlobalContext);
  let a=0;
  let b=0;
  transactions.map((transactions) =>{
    if(transactions.amount>0)a+=transactions.amount;
    else b+=Math.abs(transactions.amount);
  })
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${numberWithCommas(a.toFixed(2))}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${numberWithCommas(b.toFixed(2))}</p>
        </div>
      </div>
    </>
  )
}

export default IncomeExpences
