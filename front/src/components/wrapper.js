import React, { useContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './header';
import Footer from './footer';
import GlobalStyle from './globalStyle';

import Home from '../pages/home';
import Animal from '../pages/animal';
import User from '../pages/user';
import Challenges from '../pages/challenges';
import AddChallenge from '../pages/addChallenge';
import Challenge from '../pages/challenge';

import UserProvider, { MessageContext } from '../context/userContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div` 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Main = styled.main` 
    flex: auto;
    display: flex;
    position: relative;

    & > * {
        flex: auto;
    }
`;

const MessageBox = styled.div`
    width: 12em;
    position: absolute;
    right: 1em;
    top: 1em;
    z-index: 10000;
`;

const Message = styled.div` 
    padding: 0.5em;
    background-color: #e2e2e2;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20);
`;

export default () => {

    let { messages, del } = useContext(MessageContext);
    return (
        <Wrapper>
            <Router>
                <Header></Header>
                <Main>
                    <GlobalStyle />
                    <MessageBox>
                        { messages.map( (value, key) => {
                            setTimeout(()=>del(key), 2000);
                            return(
                                <Message key={key}>
                                    { value.text }
                                </Message>
                            )
                        })}
                    </MessageBox>
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
        </Wrapper>
    );
}


