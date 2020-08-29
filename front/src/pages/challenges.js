import React, { useEffect, useState } from 'react';
import { Container, Spinner, Button } from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


import { Header, Wrapper } from './user';
import Badge from '../components/badge';
 
const ChallengeWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

const Challenge = styled.div` 
    width: 10em;
    height: 10em;
    border: 2px solid #000;
    border-radius: 5px;
    margin: 0.5em;
`;

export default () => {

    let [challenges, setChallenges] = useState({});
    let [categories, setCategories] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch("http://127.0.0.1:5001/api/challenges/").then( res => {
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
        <Wrapper>
            <Container>
                <Header>
                    <h4>Podejmij wyzwania</h4>
                    <hr />
                </Header>
                { loading ?
                    <Spinner type="grow" color="dark" /> :
                    <div>
                        { categories.map( (value, key) => (
                            <div key={ key }>
                                <Badge>{ value }</Badge>
                                <ChallengeWrapper>
                                    { challenges[value].map( (chall, index) => (
                                        <Challenge key={ index }>
                                            { chall.name }
                                        
                                        </Challenge>
                                    )) }
                                </ChallengeWrapper>
                            </div>
                        )) }
                    </div>
                }
                <hr />
                <Link to="/challenges/add">
                    <Button color="primary" size="lg" block>Zaproponuj nowe wyzwanie</Button>
                </Link>
            </Container>
        </Wrapper>
    );
}