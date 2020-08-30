import React, { useEffect, useState } from 'react';
import { Container, Spinner, Button } from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


import { Wrapper } from './user';
import Badge from '../components/badge';

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
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20);
    position: relative;
    border-radius: 5px;
    margin-bottom: 2em;
`;

const ChallengeList = styled.div`
    margin-bottom: 1em;
    display: flex;
`;

const Challenge = styled.div` 
    margin: 0.5em;
    width: 20em;
    height: 8em;
    background-color: #e2e2e2;
    position: relative;

    a {
        color: #000;
    }
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
`;

const Take = styled.div` 
    height: 2em;
    line-height: 2em;
    background-color: #28a745;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;

export default () => {

    let [challenges, setChallenges] = useState({});
    let [categories, setCategories] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch("http://127.0.0.1:5000/api/challenges/").then( res => {
            return res.json();
        }).then( json => {
            let cat = [];   
            let chall = {};

            json.map( value => {
                if(chall[value.type]) {
                    chall[value.type].push(value);
                } else {
                    chall[value.type] = [value];
                    cat.push(value.type);
                }
            });
            
            setChallenges(chall);
            setCategories(cat);
            setLoading(false);
        }).catch(err => {
            console.log(err);
        });


    }, []);

    return(
        <Background>
            <Wrapper>
                <Container>
                    <Header>Take on a challenge</Header>

                    { loading ?
                        <Spinner type="grow" color="dark" /> :
                        <div>
                            { categories.map( (category, key) => (
                                <div key={ key }>
                                    <Badge>{ category }</Badge>
                                    <ChallengeList>
                                        { challenges[category].map( (challenge, index) => (
                                            <Challenge key={ index }>
                                                <Name>{ challenge.name }</Name>

                                                <Points>{ challenge.exp }</Points>
                                                <Link to={ "/challenge/" + challenge.id }><Take>View More</Take></Link>
                                            </Challenge>
                                        )) }
                                    </ChallengeList>
                                </div>
                            )) }
                        </div>
                    }
                    <Link to="/challenges/add">
                        <Button color="primary" block>Add new challenge</Button>
                    </Link>
                </Container>
            </Wrapper>
        </Background>
    );
}