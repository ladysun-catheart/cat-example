import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const linkCat = {key: 'list', label:'List', path:'/cat'};
const linkContact = {key: 'contact', label:'Contact', path:'/contact'};
const optionList = [
  linkCat,
  linkContact
];

const TopBar = () => {
  return ( 
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Super Neko</Navbar.Brand>
      <Nav classname="mr-auto">
        {optionList.map( op => (
          <Nav.Link key={op.key}>
            <Link to={op.path}>{op.label}</Link>
          </Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
}
 
export default TopBar;