import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import AddTransaction from "./components/AddTransaction";
import Balence from "./components/Balence";
import EachTransaction from "./components/EachTransaction";
import Header from "./components/Header";
import IncomeExpences from "./components/IncomeExpences";
import NavBar from "./components/NavBar";
import TransactionList from "./components/TransactionList";
import { GlobalContext } from "./context/GlobalState";
import {  Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import StartPage from "./components/StartPage";
import { useContext } from "react";

function App() {
  const {user}=useContext(GlobalContext);
  return (
    <>
      <NavBar />
      <div className="HI">
        <div className="container">
          <Routes>
            <Route
              exact
              path="/register"
              element={
                <>
                  <Register />
                </>
              }
            ></Route>
            <Route
              exact
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            ></Route>
            
            <Route
              exact
              path="/"
              element={
                <>
                  <StartPage />
                </>
              }
            ></Route>
            <Route
              exact
              path="/addTransactions"
              element={
                <>
                  <Header />
                  <Balence />
                  <IncomeExpences />
                  <AddTransaction />
                </>
              }
            ></Route>
            <Route
              exact
              path="/transactions"
              element={
                <>
                  <Header />
                  <Balence />
                  <IncomeExpences />
                  <TransactionList />
                </>
              }
            ></Route>
            <Route
              exact
              path="/transactions/each"
              element={
                <>
                  <Header />
                  <Balence />
                  <IncomeExpences />
                  <EachTransaction id="123" />
                </>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
