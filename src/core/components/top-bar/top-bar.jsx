import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const optionList = [
  {key: 'list', label:'List', path:'#link'},
  {key: 'contact', label:'contact', path:'#contact'}
];

const TopBar = () => {
  return ( 
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Super Neko</Navbar.Brand>
        <Nav classname="mr-auto">
          {optionList.map( op => <Nav.Link key={op.key} href={op.path}>{op.label}</Nav.Link>)}
        </Nav>
    </Navbar>
  );
}
 
export default TopBar;