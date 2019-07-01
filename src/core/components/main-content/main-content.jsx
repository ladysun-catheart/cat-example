import React from 'react';
import Cat from '../../cat';
import Contact from '../../contact';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainContent = () => {
  return ( 
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Cat} />
          <Route exact path="/cat" component={Cat} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Container>
  );
}
 
export default MainContent;