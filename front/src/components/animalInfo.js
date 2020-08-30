import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Spinner, Button } from 'reactstrap';
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

    let [loading, setLoading] = useState(true);
    let [challenges, setChallenges] = useState([]);

    let [loadingC, setLoadingC] = useState(true);
    let [challengesC, setChallengesC] = useState([]);

    useEffect( () => {
        let promises = [];
        (user.currentChallenge || []).forEach( value => promises.push(
            fetch("http://127.0.0.1:5000/api/challenges/" + value).then(res => res.json())
        ));
        
        Promise.all(promises).then( res => {
            setChallenges(res);
            setLoading(false);
        }).catch(err => {
            console.log(err);
        })
    }, [user]);

    useEffect( () => {
        let promises = [];
        (user.finishedChallenges || []).forEach( value => promises.push(
            fetch("http://127.0.0.1:5000/api/challenges/" + value).then(res => res.json())
        ));
        
        Promise.all(promises).then( res => {
            setChallengesC(res);
            setLoadingC(false);
        }).catch(err => {
            console.log(err);
        })
    }, [user]);

    return(
        <Wrapper>
            <h4>Welcome { user.username }!</h4>
            <hr />
            <Badge>Your pet</Badge>
            <Info>
                <p>
                    Name: { user.animalName }
                </p>
                <p>
                    Level: { user.level }
                </p>
                <p>
                    Experience: { user.exp }/{ user.level * 100 };
                </p>
            </Info>
            <Badge>Your's challenges</Badge>
            { loading ?
                <Spinner type="grow" color="dark" /> :
                <ChallengeList>
                    { (challenges).map( (value, key) => (
                        <Link to={ "/challenge/" + value.id } key={ key }>
                            <Challenge>
                                <Name>{ value.name }</Name>

                                <Points>{ value.exp } pts.</Points>
                            </Challenge>
                        </Link>
                    )) }
                </ChallengeList>
            }
           
            <Badge>Last completed</Badge>
            { loadingC ?
                <Spinner type="grow" color="dark" /> :
                <ChallengeList>
                    { (challengesC).map( (value, key) => (
                        <Link to={ "/challenge/" + value.id } key={ key }>
                            <Challenge>
                                <Name>{ value.name }</Name>

                                <Points>{ value.exp } pts.</Points>
                            </Challenge>
                        </Link>
                    )) }
                </ChallengeList>
            }
            <hr />
            <Link to="/challenges">
                <Button color="success" block>I want more</Button>
            </Link>
        </Wrapper>
    );
}