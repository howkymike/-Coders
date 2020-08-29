import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import Animal from './pages/animal';

import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div` 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Main = styled.main` 
    flex: auto;
`;

function App() {

  return (
    <Wrapper>
        <Router>
            <Header></Header>
            <Main>
                <Switch>
                    <Route path="/animal">
                        <Animal />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Main>
            <Footer></Footer>
        </Router>
    </Wrapper>
  );
}

export default App;
