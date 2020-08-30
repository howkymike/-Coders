import React, { useState, useContext, useEffect } from 'react';
import { Container, Spinner } from 'reactstrap';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

import { Wrapper } from './user';
import { UserContext } from '../context/userContext';

const Background = styled.div`
    background-image: url("/list.png");
    background-position: left center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
`;

const Header = styled.div` 
    background-color: #e2e2e2;
    padding: 0.5em;
`;

const Body = styled.div` 
    background-color: #e2e2e2;
    padding: 1em;
    margin: 1em;
`;

const ChallengeWrapper = styled.div` 

`;

export default () => {

    let [loading, setLoading] = useState(true);
    let [challenge, setChallenge] = useState({});

    let { user } = useContext(UserContext);

    let { id } = useParams();

    console.log(id);

    useEffect( () => {
        fetch("http://127.0.0.1:5001/api/challenges/" + id).then( res => {
            return res.json();
        }).then( json => {
            setChallenge(json);
            setLoading(false);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return(
        <Background>
            <Wrapper>
                <Container>
                    <Header>
                        <h4>{ loading ? "Challenge" : challenge.name}</h4>
                    </Header>
                    <Body>
                        { loading ?
                            <Spinner type="grow" color="dark" /> :
                            <ChallengeWrapper>
                                <div>
                                    { challenge.desc }    
                                </div>    
                                <hr />
                            </ChallengeWrapper>
                        }
                    </Body>
                </Container>
            </Wrapper>
        </Background>
    );
}