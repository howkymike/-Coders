import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import GlobalStyle from './components/globalStyle';

import Home from './pages/home';
import Animal from './pages/animal';
import User from './pages/user';
import Challenges from './pages/challenges';
import AddChallenge from './pages/addChallenge';
import Challenge from './pages/challenge';

import UserProvider from './context/userContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div` 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Main = styled.main` 
    flex: auto;
    display: flex;

    & > * {
        flex: auto;
    }
`;

function App() {

  return (
    <Wrapper>
        <GlobalStyle />
        <UserProvider>
            <Router>
                <Header></Header>
                <Main>
                    <Switch>
                        <Route path="/animal">
                            <Animal />
                        </Route>
                        <Route path="/user">
                            <User />
                        </Route>
                        <Route path="/challenges/add">
                            <AddChallenge />
                        </Route>
                        <Route path="/challenges">
                            <Challenges />
                        </Route>
                        <Route path="/challenge/:id" children={<Challenge />} />
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Main>
                <Footer></Footer>
            </Router>
        </UserProvider>
    </Wrapper>
  );
}

export default App;
