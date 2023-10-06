import React from 'react'
import {Link} from 'react-router-dom';

const StartPage = () => {
  return (
        <div>
            <br /><br /><br />
            <h1>Expence Tracker</h1>
            <br/><br/>
            <p className="lead mx-5"> Welcome Users! <br/><br/> 
An Expense Tracker is a digital tool designed to help individuals and businesses keep a close watch on their financial activities. It serves as a virtual ledger, allowing users to record and categorize their expenditures, thereby gaining insights into their spending habits. By maintaining a detailed record of expenses, from everyday purchases to bills and larger investments, users can better understand where their money is going. This awareness empowers them to make informed decisions, set budgets, and adjust their financial priorities accordingly. Expense trackers often offer additional features such as budget-setting capabilities, visualizations of spending patterns, and reminders for bill payments. In essence, an Expense Tracker acts as a personal financial assistant, promoting financial responsibility and aiding in effective money management.</p>
            <br/><br/><Link to="/login" className="btn btn-lg btn-secondary font-weight-bold border-white">LOG ME IN</Link>

        <footer className="mt-auto text-white-50">
            <p>&copy; 2023 </p>
        </footer>




    

    </div>
  )
}

export default StartPage
