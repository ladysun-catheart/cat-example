import React from 'react';
import { CatMain } from '../../cat';
import CatCreate from '../../cat/cat-create';
import CatPreUpdate from '../../cat/cat-update';
import Contact from '../../contact';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from "react-router-dom";

const MainContent = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={CatMain} />
        <Route exact path="/cat" component={CatMain} />
        <Route exact path="/cat/create" component={CatCreate} />
        <Route exact path="/cat/:idCat/update" component={CatPreUpdate} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Container>
  );
}

export default MainContent;