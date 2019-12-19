import React, { useState } from 'react';
import {
          Collapse,
          NavbarToggler,
          Nav,
          NavItem,
          Navbar
   } from 'reactstrap';
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <section id="nav-bar">
       <Navbar color="light" light expand="md">
        <Link to='/' className="navbar-brand">Flight with us</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <Link to='/statistics' className="nav-link">Statistics</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </section>
  );
}

export default Navigation;