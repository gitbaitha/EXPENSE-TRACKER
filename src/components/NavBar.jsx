import Container from "react-bootstrap/Container";
import { Button, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";
import {GlobalContext} from '../context/GlobalState'
import React,{useContext} from 'react'



function NavBar() {
  const navigate=useNavigate();
  const {user,LogMeOut}=useContext(GlobalContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none" ,color:"white"}}>Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Link to="/addTransactions"   style={{ textDecoration: "none" ,color:"white"}}>AddTransaction</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/transactions" style={{ textDecoration: "none" ,color:"white"}}>Transactions</Link></Nav>
          <Nav>
          {user===null ? (<>
            <Navbar.Text>
              <Link
                to="/login"
                className="mx-3"
                style={{ textDecoration: "none" }}
              >
                Login
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register
              </Link>
            </Navbar.Text></>
      ) : (<>
            <Navbar.Text>
              <Button 
              style={{ textDecoration: "none" }}
              onClick={()=>{
                LogMeOut();
                navigate('/');
              }}>
                Logout
              </Button>
            </Navbar.Text></>
      )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
