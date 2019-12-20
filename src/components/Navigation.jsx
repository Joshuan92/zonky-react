import React, { useState } from 'react';
import {
          Collapse,
          NavbarToggler,
          Nav,
          NavItem,
          Navbar
   } from 'reactstrap';
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { loading } = props;



  const toggle = () => {
    setIsOpen(!isOpen)
  };

  let statisticsLink = ""
  if (loading === false)
  {
    statisticsLink = 
    <NavItem>
      <Link to='/statistics' className="nav-link">Statistics</Link>
    </NavItem>
  }

  return (
    <section id="nav-bar">
       <Navbar color="light" light expand="md" className="mb-3">
        <Link to='/' className="navbar-brand">Flight with us</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {statisticsLink}
          </Nav>
        </Collapse>
      </Navbar>
      </section>
  );
}

export default Navigation;