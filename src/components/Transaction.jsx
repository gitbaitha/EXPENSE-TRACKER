import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../comma";
import {useNavigate} from 'react-router-dom'

const Transaction = ({ transaction }) => {
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const { user,deleteTransaction } = useContext(GlobalContext);
  // console.log(transaction)
  return (
    <div>
      <li className={transaction.amount > 0 ? "plus" : "minus"}>
        {transaction.text}
        <span>{formatDate(transaction.date)}</span>
        <span>
          {transaction.amount > 0 ? "+" : "-"}$
          {numberWithCommas(Math.abs(transaction.amount))}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction({user,TransactionId:transaction._id})}
        >
          x
        </button>
        <div
          className="description-box"
        >
          {transaction.description}
        </div>
      </li>
    </div>
  );
};

export default Transaction;
