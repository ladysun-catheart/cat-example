import React from 'react';
import Cat from '../../cat';
import CatCreate from '../../cat/cat-create/cat-create';
import CatUpdate from '../../cat/cat-update/cat-update';
import Contact from '../../contact';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from "react-router-dom";

const MainContent = () => {
  return ( 
    <Container>
      <Switch>
        <Route exact path="/" component={Cat} />
        <Route exact path="/cat" component={Cat} />
        <Route exact path="/cat/create" component={CatCreate} />
        <Route exact path="/cat/:id/update" component={CatUpdate} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Container>
  );
}
 
export default MainContent;