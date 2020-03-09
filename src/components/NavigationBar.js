import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    height: 10vh;
  }

  .navbar-brand {
    font-weight: 600;
    color: #ffa8ca;
    font-size: 1.5rem;
    padding-left: 2rem;
    letter-spacing: 1px;
    &:hover {
      color: #ffa8ca;
    }
  }
  
  .navbar-nav .nav-link {
    color: #9bf2d7;
    font-weight: 400;
    padding: 1rem 2rem;
    margin: 0;
    &:hover {
      color: white;
    }
  }
`;
export const NavigationBar = () => (
         <Styles>
           <Navbar expand="lg">
             <Navbar.Brand>
               <Link className="navbar-brand" to="/">
                 Sweets To Go
               </Link>
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto">
                 <Nav.Item>
                   <Nav.Link>
                     <Link className="nav-link" to="/">
                       Home
                     </Link>
                   </Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link>
                     <Link className="nav-link" to="/menu">
                       Menu
                     </Link>
                   </Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link>
                     <Link className="nav-link" to="/login">
                       Login
                     </Link>
                   </Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link>
                     <Link className="nav-link" to="/account">
                       Account
                     </Link>
                   </Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link>
                     <Link className="nav-link" to="/purchase">
                       <i className="fas fa-shopping-cart" />
                     </Link>
                   </Nav.Link>
                 </Nav.Item>
               </Nav>
             </Navbar.Collapse>
           </Navbar>
         </Styles>
       );
