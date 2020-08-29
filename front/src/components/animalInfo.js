import React, { useContext } from 'react';
import styled from 'styled-components';
import { Progress, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { UserContext } from '../context/userContext';

import Badge from '../components/badge';

const Wrapper = styled.div` 
    background-color: #e2e2e2;
    padding: 0.5em;
`;

const Info = styled.div` 
    padding: 0.5em;

    p {
        margin-bottom: 1em;
    }
`;

const ChallengeList = styled.div`  
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
    a {
        color: #000;
    }
`;

const Challenge = styled.div` 
    width: 12em;
    height: 6em;
    border: 2px solid #000;
    margin: 0.5em;
    position: relative;
    cursor: pointer;
`;

const Name = styled.div`  
    height: 2em;
    line-height: 2em;
    background-color: #c8c8c8;
`;

const Points = styled.div`  
    height: 2em;
    line-height: 2em;
    background-color: #c8c8c8;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export default () => {

    let { user } = useContext(UserContext);

    return(
        <Wrapper>
            <h4>Welcome { user.name }!</h4>
            <hr />
            <Badge>Your pet</Badge>
            <Info>
                <p>
                    Name: George
                </p>
                <p>
                    Level: 1
                </p>
                <p>
                    Experience: 10/20;
                </p>
            </Info>
            <Badge>Your's challenges</Badge>
            <ChallengeList>
                <Link to="/challenge/1111">
                    <Challenge>
                        <Name>Pyton tut</Name>

                        <Points>100 pts.</Points>
                    </Challenge>
                </Link>
                <Challenge></Challenge>
            </ChallengeList>
            <Badge>Last completed</Badge>
            <ChallengeList>
            </ChallengeList>
            <hr />
            <Link to="/challenges">
                <Button color="success" block>I want more</Button>
            </Link>
        </Wrapper>
    );
}